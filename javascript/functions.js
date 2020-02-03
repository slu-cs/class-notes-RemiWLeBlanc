//function syntax

//function defintion
const avg = function(a, b){
  return (a+b)/2;
};

//function call
console.log(avg(5,6));

//another function
const print = function(a,b) {
  console.log(`a=${a}, b=${b}`);
};

//undefined values
const result = print(7,8);
console.log(result); //undefined
print(9); //9, undefined
print();//undefined, undefined


//attach functions to objects so they become methods
const rectangle = {
  widt: 10,
  height: 20,
  area: function(){
    return this.width * this.height;
  }
};

//method call
console.log(rectangle.area());

//constructor defintion
const Rectangle = function(width, height){
  this.width = width;
  this.height = height;
};

//shared method
Rectangle.prototype.area = function(){
  return this.width * this.height;
} //all Rectangle objects will have area functions


//constructing objects
const small = new Rectangle(1,2);
const large = new Rectangle(10,20);


//method calls
console.log(small.area());
console.log(large.area());
