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
map(numbers, square);
