const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://SuperTestUser:STU1@todo-tdd.9n1zg.mongodb.net/todo-tdd?retryWrites=true&w=majority',
      { useUnifiedTopology: true,
        useNewUrlParser: true 
       }
      
      )
  } catch (err) {
    console.error("Error connecting to Mongodb");
    console.error(err);
  }
}

module.exports = { connect };