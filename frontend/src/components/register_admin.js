
import React from "react";
import { useState } from "react";
import './register.css'
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
