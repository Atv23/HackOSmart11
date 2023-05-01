const mongoose = require('mongoose');
const { Schema } = mongoose;
const Admin_College = new Schema({
    
    college_name:{
        type:String,
        required:false
    },
	type:{
        type:String,
        required:false
    },
    university_affiliation:{
        type:String,
        required:false,
        unique:false
    },
    address:{
        type:String,
        required:false
    },
    courses:{
        type:String,
        required:false
    },
    fees :{
        type:String,
        required:false
    },
   description:{
        type:String,
        required:false
    },
    seats_available_branch_wise :[{
        type:String,
        required:false
    }],
    contact :{
        type:String,
        required:false
    },
    highest_placement:{
        type:String,
        required:false
    },
    avg_placement:{
        type:String,
        required:false
    },
	campus_area :{
        type:String,
        required:false
    },
	nirf:{
        type:String,
        required:false
    },
	review:{
        type:String,
        required:false
    },
	established_year :{
        type:String,
        required:false
    },
	facilities :{
        type:String,
        required:false
    },
    pic_link :[{
        type:String,
        required:false
    }]
    



  });

  module.exports = mongoose.model('College',Admin_College);