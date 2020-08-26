import React,{useState, useContext} from 'react';
import CourseContext from '../context/CourseContext';
import Course from './Course';

const CourseList = () => {
  const [keyword, setKeyword ] = useState('');
  const {courselist} = useContext(CourseContext);
  const filteredList = courselist.filterCourseByKeyword(keyword);
  const style = {flex: '0 1 300px'}

  return (
    <div style={style}>
      <input type="text" onChange={(e)=> {setKeyword(e.target.value)}}/>
      <ul>
        {filteredList.map((course, index) => (
            <li key={index}><Course key={course.id} course={course}/></li>
          ))
        }
      </ul>
    </div>
  ); 
}

export {CourseList as default}