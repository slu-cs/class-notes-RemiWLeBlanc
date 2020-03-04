// hello world web server

const express = require('express');

//Create the server
const app = express();

//respond to a single request
app.get('/', function(request, response){
  response.send('Hello Remi')
})

//start the server
app.listen(3000);
console.log("Server is ready!")
