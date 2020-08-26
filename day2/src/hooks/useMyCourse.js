import {useReducer} from 'react';
import courseReducer from '../reducers/course';

const useMyCourse = () => {
  const [courselist, courseDispatch] = useReducer(courseReducer, Array(5).fill());
  const addCourse = (course, day) => courseDispatch({type:'ADD', course, day});
  const removeCourse = (day) => courseDispatch({type:'REMOVE', day});
  return {courselist, addCourse, removeCourse};
}

export {useMyCourse as default}