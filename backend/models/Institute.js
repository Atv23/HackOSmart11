const mongoose = require('mongoose');
const { Schema } = mongoose;
const InstituteSchema = new Schema({
    
    Institution_name:{
        type:String,
        required:true
    },
    InstituteID:{
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

  module.exports = mongoose.model('Institute',InstituteSchema);