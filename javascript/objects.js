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
console.log(circle.color); //undefined
circle.color = 'blue';
console.log(circle.color); //'blue'


//Arrays
const languages = ['HTML', 'CSS', 'JS'];
console.log(languages);

//Length
for (let i = 0; i < languages.length; i++){
  console.log(languages[i]);
}

//changing elements
languages[2] = 'JavaScript';

//adding elements
languages.push('MongoDB');

//iterating over elements
for(const lang of languages){
  console.log(lang);
}
