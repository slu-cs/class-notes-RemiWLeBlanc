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
