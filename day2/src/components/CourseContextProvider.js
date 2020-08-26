import React from 'react';
import useCourseStore from '../stores/course';
import useMyCourseStore from '../stores/myCourse';
import CourseContext from'../context/CourseContext';

const CourseContextProvider = ({children}) => {
  return (
    <CourseContext.Provider value={{
      courselist : useCourseStore(),
      myCourse : useMyCourseStore()
    }}>
      {children}
    </CourseContext.Provider>
  );
}
export {CourseContextProvider as default}