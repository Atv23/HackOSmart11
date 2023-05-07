import React ,{useRef} from 'react'
import { useState,useEffect } from 'react';
// import './schooldetails.css'
//import '../briefschl.css '
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './schooldetails.module.css'
import x from './download.jpg'
import y from './updated logo for hackthon-1.jpg'
import z from './R.png'
import w from './college.jpg'
import v from './OIP.jpg'
import { useParams } from 'react-router-dom'
import axios from "axios";

const SchoolDetails = () => {
  const {id} = useParams();
    const [schoolDetails,setSchooldetails]=useState({});
    const [reviews,setReviews] = useState([]);
    useEffect(() => {
      // console.log("ID of the school",id);
   
      axios
        .get(`http://localhost:5000/api/add/listSchool/${id}`)
        .then((response) => {
          setSchooldetails(response.data);
          console.log("Scools data =>",response.data);
          console.log("Scools data =>",response.data.fee_upto5);
        });
    }, []);

    useEffect(() => {
      // console.log("ID of the school",id);
   
      axios
        .get(`http://localhost:5000/api/addRev/listreviews`)
        .then((response) => {
          setReviews(response.data);
          console.log("Scools data =>",response.data);
          console.log("Scools data =>",response.data[0].user_review[0].user_name);
        });
    }, []);

  const ref = useRef(null);
  const updateNote = async (e) => {
      e.preventDefault();
      ref.current.click()
  };

  return (
<>



            
<style>
  {
    `
    hr{
      border-color: rgb(216, 212, 212);
      border-style: none;
      border-top-style: dotted;
      margin-left:600px;
      align-items: center;
      border-width:8px;
      width: 30%;
  }
  *{
    margin:0 20 0 20
}
  body{
  background-color:#121212;
}
hr{
    border-color: grey;
    border-style: dotted none none;
    /* border-top-style: dotted; */
    border-width:8px;
    width: 10%;
}
.nav{
  display: flex;
}
.schoolname{
  color: white;
}
.schooladdress{
  color: white;
}
.basic_info{
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  margin-bottom: 20px;
  margin-left:50px;
}
.card1 {
  color: white;
  box-shadow: 0 4px 8px 0 rgb(255, 255, 255);
  max-width: 1400px;
  margin: auto;
  margin-bottom: 30px;
  text-align: left;
}
.school-img{
  width: 1400px;
  height: 250px;
  margin: auto;
  margin-bottom: 20px;
  /* margin-top: 20px; */
}


.btn1{
    border: snow;
    border-radius: 40px;
    color: black;
  background-color:#1de9b6;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.btn1:hover{
  background-color: rgb(32, 234, 217);
}
.logo{
  height:40px;    
  margin-top: 30px;
  /* display: flex;
  float:left; */
  /* margin-bottom: -5px; */
  border: solid;
    border-color: #1de9b6;
    border-radius: 15px;
}

.facilitybtn{
    border-radius: 20px;
    margin-left:20px;
    margin-bottom: 15px;
    background-color: #1de9b6;
}
.facilitybtn:hover{
  background-color:rgb(32, 234, 217) ;
  border-width: 5px;
}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
.log{
  /* display: flex;
  float: right; */
  margin-left: 1350px;
  margin-top: -35px;
  padding-bottom: 50px;
}

.sch-name{
  display: flex;
  margin-left: 40px;
}
.location{
  display: flex;
}
.map{
  width: 200px;
  margin-left: 900px;
}

.abt{
    background-color: #a4a7a8 ;
    border: solid;
    border-radius: 30px;
    border-color: #40f4bf;
    margin-top:30px;
    margin-bottom:30px;
}
.abt:hover{
  border-width: 10px;
}
.abc{
    margin-left: 20px;
    margin-right:10px;
    margin-bottom:20px;
    width:420px;
    height:300px
}
.schlinfo{
  text-align: center;
  margin-left:10px;
  margin-top:5px;
}

table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  th {
    background-color: #1de9b6;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 10px;
  }

  td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  

  tr:hover {
    background-color: #7be7cc;
  }

  .class-header {
    background-color: #757575;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 10px;
  }
 
  .icon {
    width: 2em;
    height: 2em;
    margin-right: 0.5em;
    vertical-align: middle;
  }

  .class1 {
    background-color: #e9db1d;
    color: #fff;
    border-radius: 50%;
    padding: 0.5em;
  }

  .class6 {
    background-color: #4fc3f7;
    color: #fff;
    border-radius: 50%;
    padding: 0.5em;
  }

  .class11 {
    background-color: #9c27b0;
    color: #fff;
    border-radius: 50%;
    padding: 0.5em;
  }
  .navcolor{
    background-color: #1de9b6;
  }

      /* Style the form */
      .formcont {
        width: 80%;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color:  #1de9b6;
        margin-bottom: 30px;
      }

      /* Style the form elements */
      /* label {
        display: block;
        margin-bottom: 10px;
      } */
      label {
        display: block;
        margin-bottom: 10px;
        color: #333;
        font-weight: bold;
      }
      .rating {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row-reverse;
      }
      
      .star-rating {
        display: none;
      }
      
      .abcd {
        font-size: 30px;
        color: #fffdfd;
        cursor: pointer;
      }
.add{
  margin-top: 10px;
  margin-left: 40px;
  margin-bottom: 20px;
  font-size: 20px;
}

      .abcd:hover,
      .abcd:hover ~ label,
      .star-rating:checked ~ label {
        color: #f1c40f;
      }
      input[type="text"],
      input[type="tel"],
      input[type="email"],
      textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: vertical;
        /* background-color: #280f0f; */
      }

      input[type="submit"] {
        background-color: #13a1de;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: white;
      }

      input[type="submit"]:hover {
        background-color: #5cb8ea;
      }
      .icon-phone {
        font-size: 1.5em;
        margin-right: 0.5em;
      }
      .icon-email {
        font-size: 1.5em;
        margin-right: 0.5em;
      }
      .mno{
        margin-left: 1150px;
      }
      .cntc{
        font-size: larger;
        text-decoration: underline;
      }
      .container {
        display: flex;
        flex-wrap: wrap;
      }
      .card {
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        border-radius: 4px;
              width: 4px;
        flex-basis: calc(33.33% - 20px);
        padding: 5px;
              margin: auto;
              margin-bottom: 20px;
  
      }
      .card h2 {
        font-size: 24px;
        margin-bottom: 10px;
              
      }
      .card p {
        font-size: 16px;
        line-height: 1.4;
        margin-bottom: 10px;
              
             
      }
      .card img {
        max-width: 100%;
        margin-bottom: 10px;
             
      }
      form {
        width: 80%;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }
      input[type="text"],
      input[type="email"],
      select,
      textarea {
        width: 100%;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        box-sizing: border-box;
        font-size: 16px;
      }
  
      textarea {
        height: 100px;
      }
  
      input[type="submit"] {
        background-color: #4CAF50;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 3px;
        cursor: pointer;
        font-size: 16px;
      }
  
      input[type="submit"]:hover {
        background-color: #3e8e41;
      }
      .fair_pic{
        height: 260px;
      }
      #testimonials{
        background-color:#1de9b6 ;
        border-radius: 10px;
        width:80%;
        margin: 0px auto;
        margin-bottom: 20px;;
        height: 500px;
    }
    .testimonial-text{
        font-size: 2rem;
        line-height: 1.5;
    }
    
    .testimonial-image{
        width: 10%;
        border-radius: 100%;
        margin: 20px;
    }
    .carousel-item{
        padding: 7% 15%;
    }
    .usrnm{
      text-align: center;
    }

  `}
    
</style>

    <div class="top">
        <div >
            <a class="headerlink" href="http://leetcode.com/">
                <img class="logo" src={y}/></a>
        </div>
        <div class="log">
            <button type="button" class="btn btn-primary">Login</button>
        </div>  
    <div class="card1">
      <img class="school-img" src={schoolDetails.pic_link} />
      <span> <h1 class="sch-name">{schoolDetails.school_name}</h1> </span>
      <div class="location">
      <div class="add">{schoolDetails.address}</div>
      <div class="map" id ="m">
        <a href="https://www.google.com/maps/place/13%C2%B018'03.2%22N+77%C2%B005'35.6%22E/@13.300885,77.093216,18z/data=!4m4!3m3!8m2!3d13.300885!4d77.093216 " target="_blank">
         <button type="button" class="btn1">View On Map<i class="bi bi-pin-map"></i></button>
        </a> 
      </div>
      </div>
          <div class="basic_info" >
            <div class="col-lg-3"> <i class="bi bi-cash-stack"></i> {schoolDetails.fee_upto10}</div>
    
            <div class="col-lg-3"><i class="bi bi-book"></i> : {schoolDetails.affiliation}</div>
  
            <div class="col-lg-3"> <i class="bi bi-gender-ambiguous"></i>: {schoolDetails.type}</div>
          </div>
         </div>
    <div>
        <nav class=" navcolor navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="#schoolinfo">About</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#gal">Gallery </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#seat">Seat Availability</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#fee">Fees</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link contact" href="#fac">Facilities</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link contact" href="#achv">Achievements</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link contact" href="#cont">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#rev">Review</a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
          <div id="schoolinfo" class="abt">
            <h3 class="schlinfo">About School</h3>
            <br/>
            <p class="abc">{schoolDetails.description}</p>
          </div>
          <hr/>
          <div id="gal" class="abt">
            <h3 class="schlinfo">Gallery</h3>
            <br/>
            <img class="abc" src={schoolDetails.pic_link} alt=""/>
            <img class="abc" src={schoolDetails.pic_link} alt=""/>
            <img class="abc" src={schoolDetails.pic_link} alt=""/>
            <img class="abc" src={schoolDetails.pic_link} alt=""/>
          </div>
          <hr/>
          <div id="seat" class="abt">
            <h3 class="schlinfo">Seats Availability</h3>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Seats Available</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="class-header" colspan="2">Primary School</td>
                </tr>
                <tr>
                  <td>Class 1</td>
                  <td>{schoolDetails.seats_available_class1}</td>
                </tr>
                <tr>
                  <td>Class 2</td>
                  <td>{schoolDetails.seats_available_class2}</td>
                </tr>
                <tr>
                  <td>Class 3</td>
                  <td>{schoolDetails.seats_available_class3}</td>
                </tr>
                <tr>
                  <td>Class 4</td>
                  <td>{schoolDetails.seats_available_class4}</td>
                </tr>
                <tr>
                  <td>Class 5</td>
                  <td>{schoolDetails.seats_available_class5}</td>
                </tr>
                <tr>
                    <td class="class-header" colspan="2">Secondary School</td>
                  </tr>
                <tr>
                  <td>Class 6</td>
                  <td>{schoolDetails.seats_available_class6}</td>
                </tr>
                <tr>
                  <td>Class 7</td>
                  <td>{schoolDetails.seats_available_class7}</td>
                </tr>
                <tr>
                  <td>Class 8</td>
                  <td>{schoolDetails.seats_available_class8}</td>
                </tr>
                <tr>
                  <td>Class 9</td>
                  <td>{schoolDetails.seats_available_class9}</td>
                </tr>
                <tr>
                  <td>Class 10</td>
                  <td>{schoolDetails.seats_available_class10}</td>
                </tr>
                <tr>
                  <td class="class-header" colspan="2">Pre-University School</td>
                </tr>
                <tr>
                  <td>Class 11</td>
                  <td>{schoolDetails.seats_available_class11}</td>
                </tr>
                <tr>
                  <td>Class 12</td>
                  <td>{schoolDetails.seats_available_class12}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr/>
          <div id="fee" class="abt">
            <h3 class="schlinfo">School Fee Structure</h3>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Admission Fee</th>
                  <th>Tuition Fee (per month)</th>
                  <th>Other Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="icon class1">&#x1F393;</span> Class 1-5</td>
                  <td>{schoolDetails.fee_upto5}</td>
                  <td>{schoolDetails.fee_upto5}</td>
                  <td>{schoolDetails.fee_upto5}</td>
                </tr>
                <tr>
                  <td><span class="icon class6">&#x1F393;</span> Class 6-10</td>
                  <td>{schoolDetails.fee_upto10}</td>
                  <td>{schoolDetails.fee_upto10}</td>
                  <td>{schoolDetails.fee_upto10}</td>
                </tr>
                <tr>
                  <td><span class="icon class11">&#x1F393;</span> Class 11-12</td>
                  <td>{schoolDetails.fee_upto12}</td>
                  <td>{schoolDetails.fee_upto12}</td>
                  <td>{schoolDetails.fee_upto12}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr/>
          <div id="fac" class="abt">
            <h3 class="schlinfo">Facilities</h3>
            <button type="button" class="facilitybtn">
                Playground
            </button>
            <button type="button" class="facilitybtn">
              Canteen
          </button>
          </div>
          <hr/>
          <div id="achv" class="abt">
            <h3 class="schlinfo">Achievements</h3>
            <div class="container">
              <div class="card">
                <img class="fair_pic" src={x} alt="Achievement Image"/>
                <h2 >Science Fair Winner</h2>
                <p>Lorem ipsum dolor sit nknknldnml n Donec placerat mollis est. Fusce mattis tortor id eros semper, nec bibendum ipsum fringilla. Sed ut urna libero.</p>
                <p><strong>Date:</strong> 25th May, 2021</p>
                <p><strong>Award:</strong> First Place</p>
              </div>
              <div class="card">
                <img src={v} alt="Achievement Image"/>
                <h2 >Math Olympiad Finalist</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non vestibulum lectus. Sed varius eget lectus quis sodales. Donec placerat mollis est. Fusce mattis tortor id eros semper, nec bibendum ipsum fringilla. Sed ut urna libero.</p>
                <p><strong>Date:</strong> 5th June, 2021</p>
                <p><strong>Award:</strong> Finalist</p>
              </div>
              <div class="card">
                <img src={z} alt="Achievement Image"/>
                <h2>Debate Competition Winner</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non vestibulum lectus. Sed varius eget lectus quis sodales. Donec placerat mollis est. Fusce mattis tortor id eros semper, nec bibendum ipsum fringilla. Sed ut urna libero.</p>
                <p><strong>Date:</strong> 15th July, 2021</p>
                <p><strong>Award:</strong> Best Speaker</p>
              </div>
             </div>
          
          </div>
          <hr/>
          <div id="cont" class="abt">
            <h3 class="schlinfo">Contact Us</h3><br/>
            <form class="formcont">
              <h2>User Query Form</h2>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required/>
        
              <label for="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required/>
        
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required/>
        
              <label for="query">Query:</label>
              <textarea id="query" name="query" required></textarea>
              <input style={{'margin-top': '3%' ,'type':'submit' }}value="Submit"/>
            </form>
            <div class="mno">
              <p class="cntc">Or Contact Us at: </p>
              <p>&#x260E; +1 (123) 456-7890</p>
              <p>&#x2709; example@example.com</p>
            </div>
          </div>
          <hr/>
          <div id="rev" class="abt">
            <h3 class="schlinfo">Review</h3><br/>
            <form class="formcont" action="submit_review.php" method="POST">

              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required/>
          
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required/>
              <label for="email">School:</label>
              <input type="email" id="email" name="email" required/>
          
              <label for="rating">Rating:</label>
                    <div class="rating">
                      <input type="radio" name="star" id="star1" class="star-rating" value="1"/>
                      <label for="star1" class="fas fa-star abcd"></label>
                      <input type="radio" name="star" id="star2" class="star-rating" value="2"/>
                      <label for="star2" class="fas fa-star abcd"></label>
                      <input type="radio" name="star" id="star3" class="star-rating" value="3"/>
                      <label for="star3" class="fas fa-star abcd"></label>
                      <input type="radio" name="star" id="star4" class="star-rating" value="4"/>
                      <label for="star4" class="fas fa-star abcd"></label>
                      <input type="radio" name="star" id="star5" class="star-rating" value="5"/>
                      <label for="star5" class="fas fa-star abcd"></label>
                    </div>
          
              <label for="review">Review:</label>
              <textarea id="review" name="review" rows="5" cols="50"></textarea>
          
              <input style={{'margin-top': '3%'}} type="submit" value="Submit Review"/>
          
            </form>
            <div class="colored-section" id="testimonials">

              <div id="testimonial-carousel" class="carousel slide" data-ride="false">
              {/* <!-- {reviews.map((rev) => ( --> */}
                            
                            <div class="carousel-inner">
              
                             {/* <!-- first item --> */}
                          
                            <div class="carousel-item active" >
                              {/* <!-- <h2 class="testimonial-text">{rev.user_review[0].review}</h2> --> */}
                              <h2 class="testimonial-text">review Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic soluta esse in vel dolor, minus quis qui necessitatibus animi.</h2>
                              {/* <!-- <img class="testimonial-image" src="" alt=""/> --> */}
                              
                              {/* <!-- <em>{rev.user_review[0].user_name}</em> --> */}
                              <p class="usrnm"><em>-username</em></p>
                              
                            </div>
                         
                          </div>
                          {/* // <!-- ))} --> */}
               
              
                <button class="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                 
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                  
                </button>
              </div>
          </div>
          
    </div>
    
</div>



  </>

  )

}
export default SchoolDetails

