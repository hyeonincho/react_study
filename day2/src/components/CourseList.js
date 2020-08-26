import React,{useState, useContext} from 'react';
import CourseContext from '../context/CourseContext';
import Course from './Course';

const CourseList = () => {
  const [keyword, setKeyword ] = useState('');
  const {courseData} = useContext(CourseContext);
  const filteredList = courseData.filter((course) => course.title.indexOf(keyword) !== -1)
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