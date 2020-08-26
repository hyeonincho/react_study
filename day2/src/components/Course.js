import React, {useContext} from 'react';
import CourseContext from '../context/CourseContext';
import {Day} from '../constants/Day';

const Course = ({course, timeVisibility}) => {
  const {myCourse} = useContext(CourseContext)
  const day = Object.values(Day).indexOf(course.time);
  const isEnrolled =  myCourse.courselist[day] && 
                      myCourse.courselist[day].id === course.id;
  return (
    <div>
      <strong>{course.title}</strong>
      <div style={{display: timeVisibility ? 'block': 'none'}}>{course.time}</div>
      <button type="button" 
              onClick={()=> isEnrolled ? 
                myCourse.courseDispatch({type:'REMOVE', day}) :
                myCourse.courseDispatch({type:'ADD', course,day})
              }
      >
        강의 수강 {isEnrolled ? '취소' : '신청'}
      </button>
    </div>
  );
}

Course.defaultProps = {
  timeVisibility: true,
}


export {Course as default}