import { Day } from '../constants/Day';

const courseData = [
  { id: 0, title: '영어1', time: Day.Monday,},
  { id: 1, title: '영어2', time: Day.Tuesday,},
  { id: 2, title: '회계', time: Day.Wednesday, },
  { id: 3, title: '역사', time: Day.Thursday,},
  { id: 4, title: '확통', time: Day.Friday,},
  { id: 5, title: 'C++', time: Day.Monday,},
  { id: 6, title: 'JAVA', time: Day.Tuesday,},
  { id: 7, title: 'C', time: Day.Wednesday,},
  { id: 8, title: '미적', time: Day.Thursday,},
  { id: 9, title: '몰라', time: Day.Friday,},
];

const useCourse = () => {
  const filterCourseByKeyword = (keyword) => courseData.filter((course) => course.title.indexOf(keyword) !== -1);
  return {filterCourseByKeyword};
}

export {useCourse as default}