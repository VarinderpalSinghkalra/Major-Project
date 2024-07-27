const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserRegister = new Schema({
    email:{
        type:String
    },   
    password: {
        type: String
    },
    Fname: {
        type: String
    },
    Lname: {
        type: String
    },
    address: {
        type: String
    },
    address2: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    weight:{
        type:String
    },
height:{
    type:String
}
    
    
},
);
module.exports = mongoose.model('UserRegister', UserRegister); 