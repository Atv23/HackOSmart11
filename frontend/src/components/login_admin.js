import React, { useState } from 'react'
import {Link} from "react-router-dom";
import * as jose from 'jose'
import axios from 'axios';
// import './login.css'
// import main from '../HOME/main.jpg'
// import useSelector and useDispatch to get and update data 
import { useSelector,useDispatch } from 'react-redux';
// import   all reducer functions
import { setname,setemail,setlogin } from '../components/Store/userStore';
export default function Login() {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("")
  // get data 
  const isLogin=useSelector((store)=>store.users.login)
//   const role=useSelector((store)=>store.users.type_of_user)
  const dispatch=useDispatch();
  // console.log("islogin",isLogin);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    
    
    try{
      const a = { 
        email : email,
        password : password
      }
      // console.log(a)
      const res = await axios.post('http://localhost:5000/api/auth1/loginAdmin',a)
      console.log("encrypted data",res.data.authtoken);
      // token 
      const token = res.data.authtoken;
      // set the token to local storage for initialization of the store variables
      localStorage.setItem("token",token);
      const dt=jose.decodeJwt(token,"Vaibhav@2110")
      console.log("decrypted data",dt);
        //redirect
          if(res.data.success){
            dispatch(setname(dt.name));
            dispatch(setemail(dt.email));
            dispatch(setlogin(true));
            // dispatch(settype_of_user(dt.type_of_user));
            window.location = '/adminoption'
        }
        else
          window.location = '/'
     }
      catch(err){
             
            alert("Login with correct credentials")
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
      <div className="box" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        
    <form className="login" onSubmit={handleSubmit}>
      
    <h2>Login</h2>
      

     
      <div className="form-outline mb-4 inputBox">
      
        <input type="email" onChange={e => setEmail(e.target.value)} name="email" value={email}id="loginName" className="form-control" />
        <label>Email</label>
      </div>

      
      <div className="form-outline mb-4 inputBox">
      
        <input type="password" id="loginPassword" onChange={e => setPassword(e.target.value)} name="password" value={password}className="form-control" />
        <label>Password</label>
      </div>

      
      

      
      <button type="submit" className="btn btn-primary login-button">Sign in</button>

      <br></br><br></br>
      <div className="text-left">
        <p className="reg">Not Registered? <Link to="/register">Register</Link></p>
      </div>
    </form>
  </div>
    </>
  )
}
