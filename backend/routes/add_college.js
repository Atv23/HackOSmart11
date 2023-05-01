const { application } = require("express");
const express = require("express");
// const { body, validationResult } = require("express-validator");
const { mongo } = require("mongoose");
const url =
  "mongodb+srv://vaibhavmsd39:vaibhav123@cluster0.ffpzgxn.mongodb.net/?retryWrites=true&w=majority";
const College = require("../models/Admin_college");
// const Admin = require("../models/Admin");
// const fetchuser = require("../middleware/fetchuser");

const router = express.Router();

router.post("/addCollege", async (req, res) => {
  const college = new College({
    college_name: req.body.college_name,
    type: req.body.type,
    university_affiliation: req.university_affiliation,
    address: req.body.address,
    courses: req.body.courses,
    fees: req.body.fees,
    description: req.body.description,
    highest_placement:req.body.highest_placement,
    avg_placement:req.body.avg_placement,
    campus_area:req.body.campus_area,
    nirf:req.body.nirf,
    review:req.body.review,
    established_year:req.body.established_year,
    facilities:req.body.facilities,
      contact:req.body.contact,
      pic_link:req.body.pic_link
  });


  const x = await college.save();
  console.log(x)
  res.json("college:" + "added:" + x);
  
});



module.exports = router;
