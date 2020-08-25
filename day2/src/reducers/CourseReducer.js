const CourseReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ENROLLMENT':
      const {id, time} = action.course;
      console.log(id,time)
      if(state.find(course => course.enroll && course.id !== id && course.time.value === time.value)) {
        alert('이미 해당 요일에 다른 과목이 있음')
        return state;
      }
      return state.map((course) => (course.id === id) ? {...course, enroll : !course.enroll} : course);
    default:
      return state;
  }
}

export {CourseReducer as default};