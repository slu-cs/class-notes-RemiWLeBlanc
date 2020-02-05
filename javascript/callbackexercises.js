// const numbers = [1, 2, 3, 4, 5];
// const odds = numbers.filter(x => x%2 > 0);
// console.log(odds);

const filter = function(nums, f){
  const remi = [];
  for(const n of nums){
    if(f(n)){
      remi.push(n)
    }
  }
  return remi;
};

const numbers1 = [1, 2, 3, 4, 5];
const odds = filter(numbers1, x => x%2 > 0);
console.log(odds);
