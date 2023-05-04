const { application } = require("express");
const express = require("express");
// const { body, validationResult } = require("express-validator");
const { mongo } = require("mongoose");
const url =
  "mongodb+srv://vaibhavmsd39:vaibhav123@cluster0.ffpzgxn.mongodb.net/?retryWrites=true&w=majority";
// const School = require("../models/Admin_school");
const Reviews = require("../models/Reviews")
// const Admin = require("../models/Admin");
// const fetchuser = require("../middleware/fetchuser");

const router = express.Router();

router.post("/addReview", async (req, res) => {

    try{
        const reviews = new Reviews({
            email: req.body.email,
            user_review: [
              {
                review: req.body.review,
                user_name: req.body.user_name
              },
            ]
          });
        
          const x = await reviews.save();
          console.log(x)
          res.json("reviews:" + "added:" + x);
    }catch(err){
        res.json("err:"+err);
    }
  
  
});

router.get("/listreviews",async (req, res) => {
  try {
    const result = await Reviews.find({}); //an empty array which will contain all the occurrences of a collection
    res.json(result);
  } catch (err) {
    res.status(401).send("review:" + "not found");
  }
});



module.exports = router;
