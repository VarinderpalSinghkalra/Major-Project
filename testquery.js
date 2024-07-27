const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    Fname: {
        type: String
    },
    Lname: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    address2: {
        type: String
    },
    email:{
        type:String
    },
    state: {
        type: String
    }
    
},
);
module.exports = mongoose.model('User', user); 