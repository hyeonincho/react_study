import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_TODO':
      return state.filter((todo) => todo !== action.removeTodo);
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
}

const TodoItem = (props) => {
  return (
    <li>
      {props.todo}
      <button type="button" onClick={() => props.removeTodo(props.todo)}>삭제</button>
    </li>
  );
}

const TodoList = () => {
  const [todolist, todolistDispatch] = useReducer(todoReducer, []);

  const addTodo = (e) => {
    e.preventDefault();
    const todo = e.target.elements.todo.value;
    e.target.elements.todo.value = ''
  
    if (todolist.indexOf(todo) > -1) {
      alert('중복임');
      return;
    }
    todolistDispatch({ type: 'ADD_TODO', todo })
  }

  const removeTodo = (removeTodo) => {
    todolistDispatch({ type: 'REMOVE_TODO', removeTodo })
  }

  return (
    <div className="TODO">
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button type="submit">입력</button>
      </form>
      <ul>
        {todolist.map((todo) =>
          <TodoItem key={todo} todo={todo} removeTodo={removeTodo} />)
        }
      </ul>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);