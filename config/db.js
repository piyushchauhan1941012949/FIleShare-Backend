require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
  //useNewUrlParser: true,  useUnifiedTopology: true
    // Database connection   //useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true,  useUnifiedTopology: true   });
    const connection = mongoose.connection;
    connection
    .once('open', function () {
      console.log('Database Connected');
    })
    .on('error', function (err) {
      console.log("MongoDB Database is not connected")
      console.log("--------------------------------");
      console.log(err);
    });
}




module.exports = connectDB;