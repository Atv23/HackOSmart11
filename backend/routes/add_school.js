const { application } = require("express");
const express = require("express");
// const { body, validationResult } = require("express-validator");
const { mongo } = require("mongoose");
const url =
  "mongodb+srv://vaibhavmsd39:vaibhav123@cluster0.ffpzgxn.mongodb.net/?retryWrites=true&w=majority";
const School = require("../models/Admin_school");
// const Admin = require("../models/Admin");
// const fetchuser = require("../middleware/fetchuser");

const router = express.Router();

router.post("/addSchool", async (req, res) => {
  const school = new School({
    school_name: req.body.school_name,
    affiliation: req.body.affiliation,
    address: req.body.address,
    type: req.body.type,
    classes: req.body.classes,
    fee_upto5: req.body.fee_upto5,
    fee_upto10: req.body.fee_upto10,
    fee_upto12: req.body.fee_upto12,
    description:req.body.description,
    seats_available_class1:req.body.seats_available_class1,
    seats_available_class2:req.body.seats_available_class2,
    seats_available_class3:req.body.seats_available_class3,
    seats_available_class4:req.body.seats_available_class4,
    seats_available_class5:req.body.seats_available_class5,
    seats_available_class6:req.body.seats_available_class6,
    seats_available_class7:req.body.seats_available_class7,
    seats_available_class8:req.body.seats_available_class8,
    seats_available_class9:req.body.seats_available_class9,
    seats_available_class10:req.body.seats_available_class10,
    seats_available_class11:req.body.seats_available_class11,
    seats_available_class12:req.body.seats_available_class12,
      
      contact:req.body.contact,
      pic_link:req.body.pic_link
  });


  const x = await school.save();
  console.log(x)
  res.json("school:" + "added:" + x);
  
});

router.get("/listSchool",async (req, res) => {
  try {
    const result = await School.find({}); //an empty array which will contain all the occurrences of a collection
    res.json(result);
  } catch (err) {
    res.status(401).send("school:" + "not found");
  }
});

router.get("/listSchool/:id",async (req, res) => {
  // let id = req.params.school_name
  console.log(req.params.id);
  try {
    const result = await School.findById(req.params.id); //an empty array which will contain all the occurrences of a collection
    res.json(result);

  } catch (err) {
    res.status(401).send("school:" + "not found");
  }
});

module.exports = router;
