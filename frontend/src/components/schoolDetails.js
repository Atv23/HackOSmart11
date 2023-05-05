import React ,{useRef} from 'react'
import { useState,useEffect } from 'react';
// import './schooldetails.css'
import '../briefschl.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom'
import axios from "axios";

const SchoolDetails = () => {
  const {id} = useParams();
    const [schoolDetails,setSchooldetails]=useState({});
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

  const ref = useRef(null);
  const updateNote = async (e) => {
      e.preventDefault();
      ref.current.click()
  };

  return (
    <><div>
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
      
      <header className="nav">
        <div>
          <a className="headerlink logo" href="http://leetcode.com/">
            <img src="pics\updated logo for hackthon-1.jpg" /></a>
        </div>
        <div className="log">
          <button type="button" className="btn btn-primary">Login</button>
        </div>
      </header>
      <div className="schoolname ">
        <h1>School Name</h1>
      </div>
      <div className="schooladdress">
        <h4>Address</h4>
      </div>
      <div className="map" id="m">
        <a href="https://www.google.com/maps/place/13%C2%B018'03.2%22N+77%C2%B005'35.6%22E/@13.300885,77.093216,18z/data=!4m4!3m3!8m2!3d13.300885!4d77.093216 " target="_blank">
          <button type="button" className="btn1">View on map</button>
        </a>
      </div>
      <div className="basic_info">

        <div>
          <span>Annual Fees</span>
          {/* {schoolDetails.map((school) => (<span>{school.fee_upto5}</span>))} */}
          <span>{schoolDetails.fee_upto5  }</span>
        </div>
        <div>
          <span>School Board</span>
          {/* {schoolData.map(school => <span>{school.type}</span>)} */}
          axax
        </div>
        <div>
          <span>School Type</span>
          <span>Co-educational</span>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#schoolinfo">About School</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#gal">Gallery </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#seat">Seat Availability</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fee">Fees</a>
              </li>
              <li className="nav-item">
                <a className="nav-link contact" href="#fac">Facilities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link contact" href="#cont">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#rev">Review</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div id="schoolinfo" className="abt">
        <h3 className="schlinfo">About School</h3>
        <br />
        <p className="abc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi deserunt illum suscipit qui minus earum ratione quia dolores est, hic cumque odio in eveniet adipisci nemo sequi. Aspernatur veritatis quidem beatae recusandae rerum odit ipsum, maxime ducimus? Dolorum, nam cum. Dicta neque hic corporis cum earum repellat, officiis culpa accusantium magni odit accusamus quae id similique pariatur sed, a reiciendis quam. Distinctio reiciendis pariatur repellat ipsa officiis, reprehenderit dolorum modi unde, omnis nam est eaque perferendis! Iusto veritatis soluta provident dolorum, numquam itaque ducimus similique dolor at molestiae aspernatur dolores quia. Minima optio, pariatur quo officia hic et necessitatibus illo laudantium, nostrum adipisci velit, veritatis quidem sit. Repellendus tenetur nostrum velit praesentium. Voluptatibus delectus aperiam similique nostrum neque atque provident perspiciatis, rem, dignissimos nemo officiis et modi qui quas nisi autem totam fugiat ad, deleniti nam voluptatum. Perspiciatis molestias veniam adipisci eius voluptatem sed eveniet dolorum blanditiis ducimus praesentium alias repellendus quaerat debitis placeat reiciendis maxime, laboriosam doloremque? Quas, numquam praesentium consequuntur nihil cumque possimus ipsum tenetur obcaecati cum. Atque sint ratione vitae deserunt qui recusandae cumque incidunt tenetur. Labore illo natus debitis harum ratione a fugit similique, quidem sed veniam, laboriosam, rerum omnis voluptatem. Qui impedit inventore, alias modi repudiandae est, et ullam eum facilis nobis aperiam maiores expedita perferendis ad, ipsam aliquid porro culpa placeat? Animi non a impedit. Totam amet qui, a distinctio tempore accusamus ut nisi impedit fugit repellendus dolor! Earum, totam quaerat ratione, optio ducimus provident laudantium modi voluptatem officia neque molestiae natus porro culpa eum praesentium vitae dolorum placeat error cum quis? Velit labore dolorem numquam molestias, culpa ducimus id, fugiat ipsum facere eius voluptatum. Laudantium, sapiente animi. Id voluptatibus sit quam ullam porro dolore nam sequi quis. Error quas culpa at quos et optio placeat laudantium provident soluta alias. Praesentium, quos eum debitis at distinctio saepe sapiente facilis ducimus dolores tempora rerum temporibus non omnis sit, laudantium neque officiis recusandae nobis! Maiores rerum autem aliquid hic ad esse molestias aspernatur ipsum repellendus illo? Excepturi minima sit modi consequatur dicta nam non impedit iusto quo, nisi reprehenderit error ipsa? Consequuntur suscipit aliquam debitis porro odio necessitatibus, impedit aliquid neque repellat dolore vel voluptatem itaque vitae alias voluptate expedita rem illo? In earum voluptate neque architecto sequi nulla veritatis perspiciatis odit tenetur, sit laboriosam! Rem omnis esse, maxime, iusto deserunt sit temporibus eum odit dolore doloremque modi quia quas inventore unde cumque totam molestiae reiciendis beatae, consequuntur illo a recusandae exercitationem incidunt ullam? Eum facilis sit hic ducimus neque labore non corrupti quibusdam sed maxime? Voluptates aut nisi labore sit error doloribus incidunt ut ab voluptate consequuntur eaque totam sequi iure maiores, beatae harum iste sint provident. Sed vel maxime dolor ab cum natus quisquam autem repudiandae assumenda harum, praesentium voluptate ipsum dignissimos voluptatum vitae nobis, tempore in. Esse qui fugiat vitae, aliquid sapiente voluptatibus laborum praesentium inventore unde ea ullam cupiditate atque officiis excepturi ipsum dolor placeat. Ducimus saepe qui similique, quo placeat sint harum dolores adipisci excepturi, ipsam reiciendis eum esse laborum!</p>
      </div>
      <hr />
      <div id="gal" className="abt">
        <h3 className="schlinfo">Gallery</h3>
        <br />
        <img className="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt="" />
        <img className="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt="" />
        <img className="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt="" />
        <img className="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt="" />
        <img className="abc" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FI9E8f6IybsxoeuAgTcmlAHaFj%26pid%3DApi&f=1&ipt=7f4a4312644227f08963eb78756f773a535f1bce922346dd5c89a69cec2d45be&ipo=images" alt="" />
      </div>
      <hr />
      <div id="seat" className="abt">
        <h3 className="schlinfo">Seats Availability</h3>
      </div>
      <hr />
      <div id="fee" className="abt">
        <h3 className="schlinfo">Fee Structure</h3>
        <p className="abc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur ipsum neque impedit, illum doloribus quia magnam provident quibusdam error quidem voluptates eaque quaerat laboriosam beatae molestias facere quo fuga, nihil aperiam nemo earum vitae magni. Et hic, iure sint similique dolore harum, quibusdam facilis eligendi, vero culpa accusamus possimus.</p>
      </div>
      <hr />
      <div id="fac" className="abt">
        <h3 className="schlinfo">Facilities</h3>
        <button type="button" className="facilitybtn">
          Playground
        </button>
      </div>
      <hr />
      <div id="cont" className="abt">
        <h3 className="schlinfo">Contact Us</h3>
      <p className="abc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ipsam dolorem hic nesciunt dolores laborum, voluptates accusantium? Neque aliquid accusantium enim animi, nam labore soluta accusamus aperiam voluptas, sunt eum, dolore nobis. Deleniti suscipit quas sequi sed reprehenderit earum, ullam, ducimus, aut nostrum eos reiciendis doloremque facilis eveniet incidunt nulla.</p>
    </div><hr></hr><div id="rev" className="abt">
        <h3 className="schlinfo">Review</h3><p className="abc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, aliquid repellat, a error delectus sed vel saepe minus quae quo sint assumenda eos accusantium consequuntur accusamus odit veritatis magni nemo facere molestias adipisci tenetur est. Facilis porro atque natus laudantium iusto. Exercitationem animi ut distinctio et optio. Qui, est excepturi?</p>
        
          </div>
          
          </div>

          <section className="colored-section" id="testimonials"/>

<div id="testimonial-carousel" className="carousel slide" data-ride="false">
  <div className="carousel-inner">

    {/* <!-- first item --> */}

    <div className="carousel-item active" >
      <h2 className="testimonial-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, inventore id. Iure distinctio earum eos maxime aperiam illum impedit voluptas iste suscipit. Nesciunt esse atque consectetur fugit tenetur harum veritatis quibusdam laboriosam iste, exercitationem itaque provident totam quis.</h2>
      <img className="testimonial-image" src="" alt=""/>
      <em>Lorem ipsum dolor sit amet.</em>
      
    </div>
    
    {/* <!-- second item --> */}

    <div className="carousel-item">
      <h2 className="testimonial-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ipsa nostrum nesciunt, debitis iusto, in numquam facilis consequuntur excepturi voluptate impedit nihil dolore? Placeat facere tempore animi quibusdam, itaque nostrum.</h2>
      <img className="testimonial-image" src="" alt=""/>
       <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iure.</em>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
   
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    
  </button>
</div>

</>
  )
}

export default SchoolDetails

