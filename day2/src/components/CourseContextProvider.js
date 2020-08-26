import React, {useReducer} from 'react';
import courseReducer from '../reducers/courseReducer';
import CourseContext from'../context/CourseContext';

const CourseContextProvider = ({children}) => {
  const [courselist, courseDispatch] = useReducer(courseReducer, Array(5).fill());

  return (
    <CourseContext.Provider value={{
      myCourse : {courselist, courseDispatch}
    }}>
      {children}
    </CourseContext.Provider>
  );
}
export {CourseContextProvider as default}