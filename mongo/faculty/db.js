//Connect to a database about faculty

const mongoose = require('mongoose');

// export this function
module.exports = function(){

  //Avoid wanrings
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  //start connecting
  mongoose.connect('mongodb://localhost/faculty');

  //Make sure we see any errors
  mongoose.connection.on('error', function(error){
    console.error(error.stack);
  });

};
