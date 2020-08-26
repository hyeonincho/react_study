const courseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const {day, course} = action;
      if(state[day] && state[day].id !== course.id) {
        alert('이미 해당 요일에 다른 수업 있음')
        return state;
      }
      return [
        ...state.slice(0, day),
        course,
        ...state.slice(day+1)
      ];
    case 'REMOVE':
      return [...state.slice(0,action.day),undefined, ...state.slice(action.day + 1)];
    default:
      return state;
  }
}

export {courseReducer as default};