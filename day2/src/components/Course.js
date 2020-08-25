import React, {useContext} from 'react';
import CourseContext from '../context/CourseContext';

const Course = ({course, timeVisibility}) => {
  const {courseDispatch} = useContext(CourseContext)

  return (
    <div>
      <strong>{course.title}</strong>
      <div style={{display: timeVisibility ? 'block': 'none'}}>{course.time.text}</div>
      <button type="button" 
              onClick={()=>courseDispatch({type:'TOGGLE_ENROLLMENT', course})}
      >
        강의 수강 {course.enroll ? '취소' : '신청'}
      </button>
    </div>
  );
}

Course.defaultProps = {
  timeVisibility: true,
}


export {Course as default}