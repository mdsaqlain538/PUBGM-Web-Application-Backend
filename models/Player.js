const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const playerSchema = new mongoose.Schema({
    name1:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    },
    name2:{
        type:String,
        trim:true,
        maxlength:32,
        unique:true
    },
    name3:{
        type:String,
        trim:true,
        maxlength:32,
        unique:true
    },name4:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    },
    Transaction:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    },
    number:{
        type:String,
        trim:true,
        required:true,
        maxlength:10
    },
    photo:{
        data:Buffer,
        contentType:String,
    }
},{timestamps:true});

module.exports = mongoose.model("Player",playerSchema);