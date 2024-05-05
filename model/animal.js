const mongoose = require('mongoose');
const animal = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    legs:{
        type:String,
        required:true
    }
});

const ani = mongoose.model('animal',animal);
module.exports=ani;