const mongoose = require('mongoose');
const { Schema } = mongoose;
const Admin_School = new Schema({
    
    school_name:{
        type:String,
        required:false
    },
    affiliation:{
        type:String,
        required:false,
        unique:false
    },
    address:{
        type:String,
        required:false
    },

    type:{
        type:String,
        required:false
    }, 
    classes:{
        type:String,
        required:false
    },
    fee_upto5 :{
        type:String,
        required:false
    },
    fee_upto10 :{
        type:String,
        required:false
    },
    fee_upto12 :{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    seats_available_class1 : {
        type:String,
        required:false
    },
    seats_available_class2 : {
        type:String,
        required:false
    },
    seats_available_class3 : {
        type:String,
        required:false
    },
    seats_available_class4 : {
        type:String,
        required:false
    },seats_available_class5 : {
        type:String,
        required:false
    },seats_available_class6 : {
        type:String,
        required:false
    },seats_available_class7: {
        type:String,
        required:false
    },seats_available_class8 : {
        type:String,
        required:false
    },seats_available_class9 : {
        type:String,
        required:false
    },
    seats_available_class10 : {
        type:String,
        required:false
    },
    seats_available_class11 : {
        type:String,
        required:false
    },
    seats_available_class12 : {
        type:String,
        required:false
    },
    contact :{
        type:String,
        required:false
    },
    pic_link :{
        type:String,
        required:false
    }
    }



  );

  module.exports = mongoose.model('School',Admin_School);