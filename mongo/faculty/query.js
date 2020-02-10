// Query the faulty Database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // to the database

//What documents are in the collection
const query = Professor.find();
query.exec(function(error, professors){
  if(error) console.error(error.stack);
  console.log(professors);
});
