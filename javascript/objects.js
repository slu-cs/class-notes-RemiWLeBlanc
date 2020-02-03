//Object and array syntax

//Object literal
const point = {x :1, y: 2};
console.log(point);

//Accessing properties
console.log(point.x);

//Change object properties
point.x = 3;

//Nested object literal
const circle = {
  center: point, // center: {x: 1, y:2},
  radius: 4
};

//Accessing properties within inner Object
console.log(circle.center.x);

//undefined properties
console.log(cirlce.color); //undefined
circle.color = 'blue';
console.log(circle.color); //'blue'
