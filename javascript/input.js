//syntax for console and file input

const readline = require('readline');

//console configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//console input
user.question('Enter a filename: ', function(filename){
   console.log(filename);
}); //asynchronous method
