import React ,{useRef} from 'react'
import { useState,useEffect } from 'react';
// import './schooldetails.css'
//import '../briefschl.css '
// import 'bootstrap/dist/css/bootstrap.min.css';
import './schooldetails.css'
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
        {`
        hr{
          border-color: grey;
          border-style: none;
          border-top-style: dotted;
          margin-left:550px;
          border-width:8px;
          width: 30%;
      }
        `}
    
</style>


    <header class="nav">
        <div >
            <a class="headerlink logo" href="http://leetcode.com/">
                <img  src="pics\updated logo for hackthon-1.jpg"/></a>
        </div>
        <div class="log">
            <button type="button" class="btn btn-primary">Login</button>
        </div>
    </header>
    <div class="schoolname ">
        <h1>School Name</h1>
    </div>
    <div class="schooladdress">
        <h4>Address</h4>
    </div>
    <div class="map" id ="m">
       <a href="https://www.google.com/maps/place/13%C2%B018'03.2%22N+77%C2%B005'35.6%22E/@13.300885,77.093216,18z/data=!4m4!3m3!8m2!3d13.300885!4d77.093216 " target="_blank">
        <button type="button" class="btn1">View on map</button>
       </a> 
    </div>
    <div class="basic_info" >
        <div>
            <span>Annual Fees</span>
            <span>2,34,243</span>
        </div>
        <div>
            <span>School Board</span>
            <span>CBSE</span>
        </div>
        <div>
            <span>School Type</span>
            <span>Co-educational</span>
        </div>
    </div>
    <div>
        <nav class=" navcolor navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="#schoolinfo">About School</a>
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
            <p class="abc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi deserunt illum suscipit qui minus earum ratione quia dolores est, hic cumque odio in eveniet adipisci nemo sequi. Aspernatur veritatis quidem beatae recusandae rerum odit ipsum, maxime ducimus? Dolorum, nam cum. Dicta neque hic corporis cum earum repellat, officiis culpa accusantium magni odit accusamus quae id similique pariatur sed, a reiciendis quam. Distinctio reiciendis pariatur repellat ipsa officiis, reprehenderit dolorum modi unde, omnis nam est eaque perferendis! Iusto veritatis soluta provident dolorum, numquam itaque ducimus similique dolor at molestiae aspernatur dolores quia. Minima optio, pariatur quo officia hic et necessitatibus illo laudantium, nostrum adipisci velit, veritatis quidem sit. Repellendus tenetur nostrum velit praesentium. Voluptatibus delectus aperiam similique nostrum neque atque provident perspiciatis, rem, dignissimos nemo officiis et modi qui quas nisi autem totam fugiat ad, deleniti nam voluptatum. Perspiciatis molestias veniam adipisci eius voluptatem sed eveniet dolorum blanditiis ducimus praesentium alias repellendus quaerat debitis placeat reiciendis maxime, laboriosam doloremque? Quas, numquam praesentium consequuntur nihil cumque possimus ipsum tenetur obcaecati cum. Atque sint ratione vitae deserunt qui recusandae cumque incidunt tenetur. Labore illo natus debitis harum ratione a fugit similique, quidem sed veniam, laboriosam, rerum omnis voluptatem. Qui impedit inventore, alias modi repudiandae est, et ullam eum facilis nobis aperiam maiores expedita perferendis ad, ipsam aliquid porro culpa placeat? Animi non a impedit. Totam amet qui, a distinctio tempore accusamus ut nisi impedit fugit repellendus dolor! Earum, totam quaerat ratione, optio ducimus provident laudantium modi voluptatem officia neque molestiae natus porro culpa eum praesentium vitae dolorum placeat error cum quis? Velit labore dolorem numquam molestias, culpa ducimus id, fugiat ipsum facere eius voluptatum. Laudantium, sapiente animi. Id voluptatibus sit quam ullam porro dolore nam sequi quis. Error quas culpa at quos et optio placeat laudantium provident soluta alias. Praesentium, quos eum debitis at distinctio saepe sapiente facilis ducimus dolores tempora rerum temporibus non omnis sit, laudantium neque officiis recusandae nobis! Maiores rerum autem aliquid hic ad esse molestias aspernatur ipsum repellendus illo? Excepturi minima sit modi consequatur dicta nam non impedit iusto quo, nisi reprehenderit error ipsa? Consequuntur suscipit aliquam debitis porro odio necessitatibus, impedit aliquid neque repellat dolore vel voluptatem itaque vitae alias voluptate expedita rem illo? In earum voluptate neque architecto sequi nulla veritatis perspiciatis odit tenetur, sit laboriosam! Rem omnis esse, maxime, iusto deserunt sit temporibus eum odit dolore doloremque modi quia quas inventore unde cumque totam molestiae reiciendis beatae, consequuntur illo a recusandae exercitationem incidunt ullam? Eum facilis sit hic ducimus neque labore non corrupti quibusdam sed maxime? Voluptates aut nisi labore sit error doloribus incidunt ut ab voluptate consequuntur eaque totam sequi iure maiores, beatae harum iste sint provident. Sed vel maxime dolor ab cum natus quisquam autem repudiandae assumenda harum, praesentium voluptate ipsum dignissimos voluptatum vitae nobis, tempore in. Esse qui fugiat vitae, aliquid sapiente voluptatibus laborum praesentium inventore unde ea ullam cupiditate atque officiis excepturi ipsum dolor placeat. Ducimus saepe qui similique, quo placeat sint harum dolores adipisci excepturi, ipsam reiciendis eum esse laborum!</p>
          </div>
          <hr/>
          <div id="gal" class="abt">
            <h3 class="schlinfo">Gallery</h3>
            <br/>
            <img class="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt=""/>
            <img class="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt=""/>
            <img  class="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt=""/>
            <img class="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt=""/>
            <img class="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt=""/>
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
                  <td>25</td>
                </tr>
                <tr>
                  <td>Class 2</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Class 3</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>Class 4</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Class 5</td>
                  <td>30</td>
                </tr>
                <tr>
                    <td class="class-header" colspan="2">Secondary School</td>
                  </tr>
                <tr>
                  <td>Class 6</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Class 7</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Class 8</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>Class 9</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>Class 10</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td class="class-header" colspan="2">Pre-University School</td>
                </tr>
                <tr>
                  <td>Class 11</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Class 12</td>
                  <td>15</td>
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
                  <td>Rs. 10,000</td>
                  <td>Rs. 2,000</td>
                  <td>Rs. 1,000</td>
                </tr>
                <tr>
                  <td><span class="icon class6">&#x1F393;</span> Class 6-10</td>
                  <td>Rs. 10,000</td>
                  <td>Rs. 2,000</td>
                  <td>Rs. 1,000</td>
                </tr>
                <tr>
                  <td><span class="icon class11">&#x1F393;</span> Class 11-12</td>
                  <td>Rs. 10,000</td>
                  <td>Rs. 2,000</td>
                  <td>Rs. 1,000</td>
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
          </div>
          <hr/>
          <div id="fac" class="abt">
            <h3 class="schlinfo">Achievements</h3>
            
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
              <input style={{'margin-top': '3%'}}  type="submit" value="Submit"/>
            </form>
            <div class="mno">
              <p class="cntc">Or Contact us at: </p>
              <p>&#x260E; +1 (123) 456-7890</p>
              <p>&#x2709; example@example.com</p>
            </div>
          </div>
          <hr/>
          <div id="rev" class="abt">
            <h3 class="schlinfo">Review</h3><br/>
            <p class="abc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, aliquid repellat, a error delectus sed vel saepe minus quae quo sint assumenda eos accusantium consequuntur accusamus odit veritatis magni nemo facere molestias adipisci tenetur est. Facilis porro atque natus laudantium iusto. Exercitationem animi ut distinctio et optio. Qui, est excepturi?</p>
          </div>
          
    
          <div class="colored-section" id="testimonials">

<div id="testimonial-carousel" class="carousel slide" data-ride="false">
{reviews.map((rev) => (
              
              <div class="carousel-inner">

              {/* <!-- first item --> */}
            
              <div class="carousel-item active" >
                <h2 class="testimonial-text">{rev.user_review[0].review}</h2>
                {/* <img class="testimonial-image" src="" alt=""/> */}
                
                <em>{rev.user_review[0].user_name}</em>
                      
                
              </div>
           
            </div>
            ))}
 

  <button class="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
   
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    
  </button>
</div>
</div>




  </>

  )
}

export default SchoolDetails

