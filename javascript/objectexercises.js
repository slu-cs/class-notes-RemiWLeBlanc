

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
const b2 = new Book('B2', ['Remi LeBlanc', 'Wazzzaz']);

console.log(b1.authorCheck('Remi LeBlanc'));
console.log(b1.authorCheck('Wazzza'));


//3. Define a function that works like the range function in Python. For example,
//range(5) returns [0,1,2,3,4] and range(3,8) returns [3,4,5,6,7].

const range = function(num1, num2){
  lst = [];
  if(typeof num2 == undefined){
    for(let i = 0; i< num2; i++){
      lst.push(i);
    }
  } else {
    for(let i = num1; i<num2; i++){
      lst.push(i);
    }
  }
  return lst;
};

console.log(range(5));
console.log(range(3,8));
