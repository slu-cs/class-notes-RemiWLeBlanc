

//1. Create an array of objects representing the courses you are taking this semester.
//Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
//Iterate through this array to find the largest course number in your schedule.
const Course = function(course, number){
  this.course = course;
  this.number = number;
};
const pl = new Course('CS', 364);
const web = new Course('CS', 332);
const phys = new Course('MUS', 120);

const courses = [pl,web,phys];
const max = courses[1];

for(const course of courses){
  if(course.number > max.number) {
    max = course
  }
}
console.log(max);
