import React from 'react'
import xy from './1.jpg'
const admin_option = () => {
    const handleClick =()=>{
        window.location = '/addschool'
    }
    
  return (
    
    <div>
      
    <style>
        {`
            body {
                /* background-image: url(admin.png); Replace 'background.jpg' with the path to your image */
                background-size: 100cqmax;
                background-position: center;
                font-family: Arial, sans-serif;
                background-color: rgb(7, 7, 6);
                margin: 0;
                padding: 0;
              }
              .button {
                background-color: #4caf50; /* Green */
                border: none;
                color: white;
                padding: 10px;
                text-align: center;
                text-decoration: none;
                display: block;
                font-size: 35=]px;
                margin-top: 15px;
                cursor: pointer;
                border-radius: 25px;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                  0 2px 10px 0 rgba(0, 0, 0, 0.19);
                position: -webkit-sticky;
              }
              .contai {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 5%;
              }
              img {
                width: 25vw;
                height: 50vh;
              }
        `}
      
    </style>


    <div className="contai">
      <img src={xy}alt="" />

      <button className="button" onClick={handleClick}>Add School</button>


      <button className="button">Add College</button>
      <button className="button">View your institution</button>
    </div>
</div>

  )
}

export default admin_option
