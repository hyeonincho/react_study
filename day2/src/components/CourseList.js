import React,{useState} from 'react';
import {courseData} from '../stores/courseData';
import Course from './Course';

const CourseList = () => {
  const [keyword, setKeyword ] = useState('');
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