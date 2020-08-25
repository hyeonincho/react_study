import React, {useContext} from 'react';
import CourseContext from '../context/CourseContext';
import Course from './Course';
import {Day} from '../constants/Day';

const CourseTimeTable = () => {
  const {courselist} = useContext(CourseContext);
  const filteredList = courselist.filter((course) => course.enroll);
  const myCourses = Array(5).fill().map((v, index) => {
    const course = filteredList.find(course => course.time.value === index);
    if(course) {
      return course;
    }
    return undefined;
  })
  const style = {flex : '1 1 auto', display: 'flex', 'justify-content': 'space-around'};
  
  return (
    <ul style={style}>
      {myCourses.map((course,index) => (
        <li>
          {Object.values(Day)[index].text}요일
          {
            course ?
            <Course key={index} course={course} timeVisibility={false}/> :
            <div>자체공휴일</div>
          }
        </li>
      ))}
    </ul>
  );
}

export {CourseTimeTable as default}