import React from 'react';
import useCourse from '../hooks/useCourse';
import useMyCourse from '../hooks/useMyCourse';
import CourseContext from'../context/CourseContext';

const CourseContextProvider = ({children}) => {
  return (
    <CourseContext.Provider value={{
      courselist : useCourse(),
      myCourse : useMyCourse()
    }}>
      {children}
    </CourseContext.Provider>
  );
}
export {CourseContextProvider as default}