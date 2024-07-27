const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const bodyParser = require ('body-parser');

const userRoute=require('./routes/users')
// const config = require('./config/database');

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Methods', 'POST');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//   });

// app.use('/userstest',userTestRoutes);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongoose.set('useFindAndModify', false);

// const userRoutes = require('./api/routes/users');
// const userTestRoutes = require('./api/routes/userstest');


mongoose.connect('mongodb://localhost:27017/training',{ useNewUrlParser: true },()=>console.log("Db Connected"))
// mongoose.connect(config.database);
//  let db = mongoose.connection;
app.use('/user',userRoute);
// // Check connection
//  db.once('open', function(){
//    console.log('Connected to MongoDB');
//  });
//  // Check for DB errors
//  db.on('error', function(err){
//   console.log(err);
// });

// app.use((req, res , next )=> {
//     res.status(200).json({
//         message:'Test'
//     })
// })

module.exports = app;