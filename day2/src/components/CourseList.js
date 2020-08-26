import React,{useState, useContext} from 'react';
import CourseContext from '../context/CourseContext';
import Course from './Course';

const CourseList = () => {
  const [keyword, setKeyword ] = useState('');
  const {courselist} = useContext(CourseContext);
  const filteredList = courselist.filter((course) => course.title.indexOf(keyword) !== -1);
  const style = {flex: '0 1 300px'}

  return (
    <div style={style}>
      <input type="text" onChange={(e)=> {setKeyword(e.target.value)}}/>
      <ul>
        {filteredList.map((course) => (
            <li><Course key={course.id} course={course}/></li>
          ))
        }
      </ul>
    </div>
  ); 
}

export {CourseList as default}