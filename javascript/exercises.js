
let sum = 0;
for (let x = 1; x<=10; x++){
  sum =+ (x**2);
}

let total = 0;
let i = 0;
let j = i+1;
while(total < 1000){
  total = i+j;
  i=j;
  j = total;
}

let total1 = 0;
for (let x = 1; x<=100; x++){
  if(x%3 === 0 && x%5 !== 0){
    total1++;
  }
  if(x%5 === 0 && x%3 !== 0){
    total1++;
  }
}
console.log(total1);

let test = 11;
count = 0;
while(true){
  for(let i=1; i<= 10; i++){
    if(start%i === 0){
      count ++;
    }
  }
  if(count == 10){
    console.log(start);
    break;
  }
  count = 0;
  test ++;
}
