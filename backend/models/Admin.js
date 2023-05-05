const mongoose = require('mongoose');
const { Schema } = mongoose;
const AdminSchema = new Schema({
    
    admin_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    

  });

  module.exports = mongoose.model('Admin',AdminSchema);