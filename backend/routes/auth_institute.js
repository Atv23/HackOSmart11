const { application } = require('express')
const express = require('express')
const { body, validationResult } = require('express-validator');
const Institute = require('../models/Institute')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findOne } = require('../models/User');
const JWT_secret = "Vaibhav@2110"
const fetchuser = require('../middleware/fetchuser')
//route 1 create_user
router.post('/createinstitute',[

    //checks using express validator

    body('email','Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 }),


],async(req,res)=>{
    
    console.log("post request recieved",req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // console.log(req.body)
    // const user = User(req.body);
    // user.save();
    // res.send(req.body)
   
    //password secured using bcryptjs
    const salt = bcrypt.genSaltSync(10);
    const securepass = bcrypt.hashSync(req.body.password, salt);
    let institute = await Institute.create({
    Institution_name: req.body.Institution_name,
    InstituteID:req.body.InstituteID,
    email:req.body.email,
      password: securepass
    //   type_of_user:req.body.type_of_user
    });
    const data= {
      institute:{
        id:institute.id
        
      }
    }
    const authtoken = jwt.sign(data,JWT_secret)
    console.log(authtoken)
    res.json("authtoken:"+authtoken)
})


//route 2: authenticate using provided credentials
router.post('/loginInstitute',[

  //checks using express validator

  body('email','Enter a valid email').isEmail(),
  body('password','Password cannot be blank').exists(),


],async(req,res)=>{
  let success =false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success,errors: errors.array() });
  }
  //destructuring email and password
  const {email,password} = req.body;

  try {
    
    let institute = await Institute.findOne({email})
    // console.log("user data ",user)
    if(!institute){
      success=false
      return res.status(400).json({success,error:"Login with correct credentials"})
    }

    //compare normal password with hashed password
    const comparepassword = await bcrypt.compare(password,institute.password)
    if(!comparepassword){
      success =false;
      return res.status(400).json({success,error:"Login with correct credentials"})
    }

    const data= {
      institute:{
        id:institute.id,
        Institution_name: institute.Institution_name,
        InstituteID:institute.InstituteID,
        email:institute.email
        // type_of_user:user.type_of_user
      }
    }
    const authtoken = jwt.sign(data,JWT_secret)
    success = true;
    // console.log(success)
    res.json({success,authtoken})
    // res.sendStatus(200);

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error occured");
  }
})

//router3 get logged in user details

router.post('/getuser',fetchuser,async(req,res)=>{
  
try {
  instituteId = req.institute.id;
  const institute = await Institute.findById(instituteId).select('-password')
  res.send(institute)
} catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error occured");
}
})

module.exports = router