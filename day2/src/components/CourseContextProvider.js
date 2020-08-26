import React from 'react';
import useCourseStore from '../stores/course';
import CourseContext from'../context/CourseContext';

const CourseContextProvider = ({children}) => {
  const [courselist, courseDispatch] = useCourseStore();
  return (
    <CourseContext.Provider value={{courselist, courseDispatch}}>
      {children}
    </CourseContext.Provider>
  );
}
export {CourseContextProvider as default}