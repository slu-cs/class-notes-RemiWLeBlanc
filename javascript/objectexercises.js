

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
let max = courses[1];

for(const course of courses){
  if(course.number > max.number) {
    max = course
  }
}
console.log(max);


//2. Define a constructor function for Book objects. Each book should have a title
//and an array of authors. Define a shared method for books that lets you check whether
//a given author was one of the authors in this book.

const Book = function(title, authors){
  this.title = title,
  this.authors = authors
};
Book.prototype.authorCheck = function(author){
  for(const a of this.authors){
    if(a === author){
      return true;
    }
  }
  return false;
}

const b1 = new Book('B1', ['Remi LeBlanc', 'Isaac Brinkman']);
const b2 = new Book('B2'. ['Remi LeBlanc', 'Wazzzaz']);

console.log(b1.authorCheck('Remi LeBlanc'));
console.log(b1.authorCheck('Wazzza'));
