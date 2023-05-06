import React from "react";
import Avatar2 from "./Avatar2";
// import './styles.module.css'
function Card2(props) {
  const id=props.id;
  
const VisitSchool=()=>{
    window.location.href = '';
    // <a href="1.html ">Visit W3Schools</a>
}
  return (
    <>
    <style>
      {`
        body {
          font-family: sans-serif;
          margin: 0 auto;
          padding: 25px;
          max-width: 1000px;
          min-width: 1000px;
          background-color: #dfe6e9;
          text-align: center;
        }
        
        .heading {
          text-align: center;
          font-size: 2em;
          color: #2d3436;
          margin: 20px 0 30px;
        }
        
        .card {
          border-radius: 25px;
          position: relative;
          padding: 25px 15px;
          background-color: #81ecec;
          margin: 50px 0;
          height: 400px;
          box-shadow: 0 2px 5px #ccc;
          text-align: left;
        }
        
        .top {
          border-radius: 25px 25px 0 0;
          height: 150px;
          width: 100%;
          background-color: #00cec9;
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          font-weight:bold;
        }
        
        .name {
          font-size: 2em;
          color: #2d3436;
          display: flex;
          flex: 1;
          flex-direction: column-reverse;
          margin: 10% 10px 0;
        }
        
        .card img {
          margin: 30px 20px 0 0;
        }
        
        .circle-img {
          margin-top: 55px;
          border-radius: 25px;
          width: 400px;
          height: 250px;
        }
        
        .bottom {
          margin-top: 120px;
        }
        
        .info {
          margin: 10px 0;
          color: #1a7e76;
        }
        
        .address{
          margin-top: 20px;
        }
        
      `}
    </style>
    <div onClick={VisitSchool}>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar2 img={props.img} />
        </div>
        <div className="bottom">
        <h3 className="info"> Fees = {props.fees} </h3> 
        <h3 className="info"> Type = {props.type} </h3>
        <h3 className="info"> Board = {props.board} </h3>
        <h3 className="address"> {props.add}</h3>

      </div>
    </div>
    </div>
    </>
  );
}

export default Card2;
