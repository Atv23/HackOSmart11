import React from 'react'
// import './default.css'
import img from './main.png'
import logo from './logo.jpg'
import knot from './knowtify.png'
// import team from './team.html'
const HomePage = () => {
    const handleClick =()=>{
        window.location ='/login'
    }
    const handleClick1 =()=>{
      window.location ='/user_option'
  }
  return (
    <>
      <style>
        {`
            .bodyyy{
  
                background-color: black;
                font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
              }
              .logo112{
                /* height:60px;     */
                width: 60px;
                margin-left: 20px;
              }
              .tmkimg{
                height: 280px;
              }
              .navbar111{
                color: rgb(0, 0, 0);
              }
              /* .anchor{
                margin:auto;
              } */
              .teamlink{
                text-decoration: none;
                color:black;
                /* margin-right: -90px ; */
              }
              .navbar111{
                background-color:rgb(255, 255, 255);
                display:flex;
                align-items: center;
                /* justify-content:center; */
                height: 60px;
              }
              
              .navbar111 ul{
                display:flex;
              }
              
              .navbar111 ul li{
                position: relative;
                list-style-type: none;
                margin: 0 15px;
                font-size: 20px;
                font-family: helvetica;
              }
              
              .navbar111 ul li:after{
                content:"";
                position: absolute;
                left:0;
                top:-10px;
                background-color: #C92C6D;
                height: 3px;
                width:100%;
                transition: 0.4s;
              }
              
              .navbar111 ul li:hover:after{
                top:25px;
              }
              
              .navbar111 ul li:hover{
                color: #1de9b6;
                transition: 0.4s;
              }
              a.teamlink:hover{
                color: #1de9b6;
                transition: 0.4s;
              }
              /* Heading Glow code starts from here */
              
              
              /* .card {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 300px;
                height: 200px;
                border: 1px solid #ccc;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                transition: all 0.2s ease-in-out;
              }
              
              .card:hover {
                border: 2px solid #6dc8dd;
                transform: translate(-5px, -5px);
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
              }
              
              
              #card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(-45deg, #00f, #0f0, #f00, #0f0, #00f);
                background-size: 400%;
                opacity: 0.8;
                z-index: -1;
                transition: all 0.5s ease-in-out;
              }
              
              #card:hover::before {
                opacity: 1;
                background-position: 100%;
              } */
              .xyz{
                display: flex;
                float: right;
                margin-left: 570px;
              }
              .atv{
                position: relative;
                height: 300px;
                margin-left: 30px;
              } 
              .pqr{
                /* margin-left: 3%; */
                margin-top: 10%; 
                font-size: 60px;
                margin-left: 40px; 
                color: rgb(251, 252, 252);
                text-shadow: 5px 2px #1de9b6;
              }
              .info11122{
                /* margin-left: 3%; */
                margin-top: 1%; 
                font-size: 35px; 
                /* text-shadow: 5px 2px #1de9b6; */
              }
              
              .btnxyz {
                color: black;
                height:40px;
                font-size: larger;
                background-color: #1de9b6;
                border-radius: 8px;
                border-color: white;
                border-width: 1px; 
                margin-left:5px;
              }
                .btnxyz:hover {
                  color: #ffffff;
                  background-color: #4ac3ec;
                  border-width: 5px;
                  border-color: white }
                .btnxyz:focus, .btnxyz.focus {
                  box-shadow: 0 0 0 0.2rem rgba(29, 233, 182, 0.5); }
              
              .hehe{
                color:white;
                text-align: center;
                font-family:serif;
                margin:0px 50px;
              }
              
              
              .examplexyz {
                height: 50px;	
                overflow: hidden;
                position: relative;
                text-overflow: "-";
               }
               .examplexyz h3 {
                font-size: 3em;
                color: #F7F9F9;
                position: absolute;
                width: 150%;
                height: 100%;
                margin-top: 0px;
                line-height: 50px;
                text-align: center;
                
                -moz-transform:translateX(100%);
                -webkit-transform:translateX(100%);	
                transform:translateX(100%);
                 
                -moz-animation: example1 15s linear infinite;
                -webkit-animation: example1 15s linear infinite;
                animation: example1 11s linear infinite;
               }
               
               @-moz-keyframes examplexyz {
                0%{ -moz-transform: translateX(100%); }
                100% { -moz-transform: translateX(-100%); }
               }
               @-webkit-keyframes examplexyz {
                0%   { -webkit-transform: translateX(100%); }
                100% { -webkit-transform: translateX(-100%); }
               }
               @keyframes examplexyz {
                0%   { 
                -moz-transform: translateX(100%); 
                -webkit-transform: translateX(100%);
                transform: translateX(100%); 		
                }
                100% { 
                -moz-transform: translateX(100%); 
                -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
              }
              }
              
        `}
      </style>
    <div className="bodyyy">
    <nav className="navbar111"> 
            <a  href="http://leetcode.com/">
            <img className="logo112" src={logo}/></a>
            <img className="tmkimg" src={knot} height="40px" alt=""/>
            <div className="xyz">
                <ul className="gfg">
                    <li className="anchor">Features</li>
                    <li className="anchor"><a className="teamlink" href="team.html"  target="_blank">Development Team</a></li>
                </ul>
            </div>
    </nav>
    <section className="py-7 py-md-0 bg-hero" id="home">
        <div className="container">
            <div className="row vh-md-100">
                <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                    <div className="examplexyz">
                        <h3 style={{'font-family': 'Verdana', 'font-size': '35px', 'color':'#1de9b6'}}>Making Tumkur a Smart City!! </h3>
                        
                    </div>
                    <br/>
                    
                    <h1 className="pqr">WELCOME</h1>
                    <img src={img} className="atv"/>
                    <br/>
                    <div className="hehe">
                        <p className="info11122"><strong>What do you want to do?</strong> </p>
                        <a ><button type="button" className="btnxyz" onClick={handleClick}>Add an institution</button></a>
                        <a ><button type="button" className="btnxyz" onClick={handleClick1}>Search for an institution</button></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </div>
    
    {/* <script src="./script.js"> </script> */}




    </>
  )
}

export default HomePage
