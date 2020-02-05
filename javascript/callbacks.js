//synatx for callbacks


//This function uses another fucntion to tranfomr an array

const map = function(array, transform){
  const copy = [];
  for (const element of array){
    copy.push(transform(element));
  }
  return copy;
};

//this function can be used as the transform
//must have one arguemnt and return something
const square = function(x){
  return x ** 2;
};

const numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, square));
console.log(numbers);

//define other transform with differnt fucntion defintions
//arrow functions
console.log(map(numbers, x => x**2)); //same as line 21
console.log(map(numbers, x => x+1)); //[2,3,4,5,6]

//built in map function
console.log(numbers.map(x => x**2));
console.log(numbers.map(x => x+1));
