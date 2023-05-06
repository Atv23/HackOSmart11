import React from 'react'

const user_option = () => {
    const handleClick = ()=>{
        window.location = './user'
    }
    const handleClick1 = ()=>{
        window.location = './user1'
    }
  return (
    <div>
        <style>
            {`
            *{
                background-color:black
            }
            .btn1 {
                color: black;
                height:40px;
                font-size: larger;
                background-color: #1de9b6;
                border-radius: 8px;
                border-color: white;
                border-width: 1px; 
                margin-top:25%;
               margin-left:40%;
            }
                .btn1:hover {
                  color: #ffffff;
                  background-color: #4ac3ec;
                  border-width: 5px;
                  border-color: white }
                .btn1:focus, .btn1.focus {
                  box-shadow: 0 0 0 0.2rem rgba(29, 233, 182, 0.5); }
            `}
        </style>
      <a ><button type="button" class="btn1" onClick={handleClick}>Search for Schools</button></a>
      <a ><button type="button" class="btn1" style = {{'margin-top':'10px'}} onClick={handleClick1}>Search for colleges</button></a>
    </div>
  )
}

export default user_option
