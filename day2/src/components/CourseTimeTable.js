import React, {useContext} from 'react';
import CourseContext from '../context/CourseContext';
import Course from './Course';
import {Day} from '../constants/Day';

const CourseTimeTable = () => {
  const {myCourse} = useContext(CourseContext);
  const myCourseList = myCourse.courselist;
  const style = {flex : '1 1 auto', display: 'flex', 'justifyContent': 'space-around'};
  
  return (
    <ul style={style}>
      {myCourseList.map((course,index) => (
        <li key={index}>
          {Object.values(Day)[index]}요일
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