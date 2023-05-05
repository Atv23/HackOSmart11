const mongoose = require('mongoose');
const { Schema } = mongoose;
const ReviewsSchema = new Schema({
    school:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    user_review : [{
        
        review:{
            type:String,
            required:true
        },
        user_name:{
            type:String,
            required:true
        }
    }]

    

  });

  module.exports = mongoose.model('Reviews',ReviewsSchema);