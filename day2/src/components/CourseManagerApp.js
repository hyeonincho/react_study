import React, {useReducer} from 'react';
import CourseList from './CourseList';
import CourseTimeTable from './CourseTimeTable';
import CourseContext from '../context/CourseContext';
import CourseReducer from '../reducers/CourseReducer';
import {Day} from '../constants/Day';


const CourseManagerApp = () => {
  let CourseData = [
    {id:0,title: '영어1', time: Day.Monday, enroll:false},
    {id:1,title: '영어2', time: Day.Tuesday, enroll:false},
    {id:2,title: '회계', time: Day.Wednesday, enroll:false},
    {id:3,title: '역사', time: Day.Thursday, enroll:false},
    {id:4,title: '확통', time: Day.Friday, enroll:false},
    {id:5,title: 'C++', time: Day.Monday, enroll:false},
    {id:6,title: 'JAVA', time: Day.Tuesday, enroll:false},
    {id:7,title: 'C', time: Day.Wednesday, enroll:false},
    {id:8,title: '미적', time: Day.Thursday, enroll:false},
    {id:9,title: '몰라', time: Day.Friday, enroll:false},
  ];
  const [courselist, courseDispatch] = useReducer(CourseReducer,CourseData);
  const style = {display:'flex'}
  return (
    <CourseContext.Provider value={{courselist,courseDispatch}}>
      <div  style={style}>
        <CourseList />
        <CourseTimeTable />
      </div>
    </CourseContext.Provider>
  );
}

export {CourseManagerApp as default}