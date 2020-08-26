import React from 'react';
import CourseList from './CourseList';
import CourseTimeTable from './CourseTimeTable';
import CourseContextProvider from './CourseContextProvider';


const CourseManagerApp = () => {
  const style = {display:'flex'}
  return (
    <CourseContextProvider>
      <div style={style}>
        <CourseList />
        <CourseTimeTable />
      </div>
    </CourseContextProvider>
  );
}

export {CourseManagerApp as default}