
import React from "react";
import { useState } from "react";
// import './register.css'
import axios from 'axios';
// import main from '../HOME/main.jpg'
export default function Register() {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    

    const handleSubmit=async (e)=>{
      e.preventDefault();
      checkEqual()
     try{
      const a = {
        name : name,        
        email : email,
        password : password,

      }
      console.log(a)
      const res = await axios.post('http://localhost:5000/api/auth1/createAdmin',a)
      console.log("res",res)
      // if(res.data){
      //     window.location.replace('http://localhost:5000/api/auth/login')
      // }
      window.location = '/login'
     }
      catch(err){
            console.log(err)
            alert("User or Email already exists")
      }
     
  }
    

  const checkEqual=()=>{
    if(name==="" || email==="" || password===""){
        alert("Please fill all the fields")
    }        
   
}


  return (
<>
<style>
      {`
      body
      {
          margin: 0;
          padding: 0;
          background-color:black;
          font-family: 'Arial';
      }
      .login{
              width: 382px;
              overflow: hidden;
              margin: auto;
              margin: 20 0 0 450px;
              padding: 80px;
              margin-top:100px;
              background: #1de9b6;
              border-radius: 15px ;
      
      }
      h2{
          text-align: center;
          color: #277582;
          padding: 20px;
      }
      label{
          color: black;
          font-size: 17px;
      }
      #Uname{
          color: black;
          width: 300px;
          height: 30px;
          border: none;
          border-radius: 3px;
          padding-left: 8px;
      }
      #Pass{
          color: black;
          width: 300px;
          height: 30px;
          border: none;
          border-radius: 3px;
          padding-left: 8px;
      
      }
      #log{
          border: snow;
          border-radius: 40px;
          color: black;
        background-color:#949797;
        padding: 5px 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      
      }
      #log:hover{
          background-color: rgb(46, 140, 240);
      
      }
      span{
          color: white;
          font-size: 17px;
      }
      a{
          float: right;
          // background-color: white;
      }
      
          </style>
      `}
      
    </style>

      <form onSubmit={handleSubmit} className="register">
        <h2>Register</h2>
      <div className="form-group inputBox">
    
    <input type="text" onChange={e => setName(e.target.value)} name="name" value={name} className="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter name"  pattern="[A-Za-z]+" title="Only alphabet characters are allowed."/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
    <label >Name</label>
  </div>
  <div className="form-group inputBox">
    
    <input type="email" onChange={e => setEmail(e.target.value)} name="email" value={email}className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <label >Email address</label>
  </div>
  <div className="form-group inputBox">
    
    <input type="password" onChange={e => setPassword(e.target.value)} name="password" value={password} className="form-control" id="password" placeholder="Enter Password"/>
    <label >Password</label>
  </div>

  
  <button type="submit" className="btn btn-primary reg-button" onSubmit={handleSubmit}>Submit</button>
</form>



    


    </>
  )
}
