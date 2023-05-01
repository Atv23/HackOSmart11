import React from 'react'
import { useState } from 'react';
import axios from "axios";
// import './school.css'
// import { Link } from 'react-router';
const School = () => {
  const [zerotofive, setzerotofive]=useState(false);
  const [sixto10, setsixto10]=useState(false);
  const [PU, setPU]=useState(false);
  const [seatAvailability, setseatAvailability]=useState(false);

  const [schoolName, setschoolName] = useState("");
  const [Affiliationtype, setAffiliationtype] = useState("");
  const [Address, setAddress] = useState("");
  const [InstitutionType, setInstitutionType] = useState("");
  const [Image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const[Feeupto5,setFeeupto5] = useState("");
  const[Feeupto10,setFeeupto10] = useState("");
  const[Feeupto12,setFeeupto12] = useState("");
  const[mode,setMode] = useState("");
  const[seats,setSeats] = useState("")
  const[seat1,setseat1] = useState("");
  const[seat2,setseat2] = useState("");
  const[seat3,setseat3] = useState("");
  const[seat4,setseat4] = useState("");
  const[seat5,setseat5] = useState("");
  const[seat6,setseat6] = useState("");
  const[seat7,setseat7] = useState("");
  const[seat8,setseat8] = useState("");
  const[seat9,setseat9] = useState("");
  const[seat10,setseat10] = useState("");
  const[seat11,setseat11] = useState("");
  const[seat12,setseat12] = useState("");
  const[contact,setcontact] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    // checkEqual();

    try {
      const a = {
        school_name:schoolName,
        affiliation: Affiliationtype,
        address: Address,
        type: InstitutionType,
        fee_upto5: Feeupto5,
        fee_upto10: Feeupto10,
        fee_upto12: Feeupto12,
        description: description,
        total_seats: seats,
        seats_available_class1: seat1,
        seats_available_class2: seat2,
        seats_available_class3: seat3,
        seats_available_class4: seat4,
        seats_available_class5: seat5,
        seats_available_class6: seat6,
        seats_available_class7: seat7,
        seats_available_class8: seat8,
        seats_available_class9: seat9,
        seats_available_class10: seat10,
        seats_available_class11: seat11,
        seats_available_class12: seat12,
        contact: contact,
        pic_link: Image
      };

      console.log(a);

      const res = await axios.post(
        "http://localhost:5000/api/add/addSchool",a);
        // console.log(config)
      console.log("res", res);
    } catch (err) {
      console.log(err);
      alert("error");
    }
    // window.location="/admin"
  };

  return (
  
    <div>
      {/* <Link rel="stylesheet" to= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> </Link> */}

      <form onSubmit= {handleSubmit}>
  <div className="inputBox">
    <label for="exampleFormControlInput1">School Name</label>
    <input type="text"
            onChange={(e) => setschoolName(e.target.value)}
            name="n"
            value={schoolName}
            className="form-control"
            id="n"placeholder="Schoolname"/>
  </div>
  <div className="aff-group">
    <label for="exampleFormControlInput1">Affiliation-type</label>
    <input onChange={(e) => setAffiliationtype(e.target.value)}
            name="affi"
            value={Affiliationtype}
            className="form-control"
            id="affi" placeholder="CBSE/ICSE/KARNATAKA BOARD"/>
  </div>
  <div className="address">
    <label for="exampleFormControlInput1">Address</label>
    <input onChange={(e) => setAddress(e.target.value)}
            name="add"
            value={Address}
            className="form-control"
            id="add" placeholder="XYZ"/>
  </div>
  <div className="Institution">
    <label for="exampleFormControlInput1">Institution Type</label>
    <input onChange={(e) => setInstitutionType(e.target.value)}
            name="ins"
            value={InstitutionType}
            className="form-control"
            id="ins" placeholder="XYZ"/>
  </div>
  <div className="description">
    <label for="exampleFormControlInput1">Description</label>
    <input onChange={(e) => setDescription(e.target.value)}
            name="desc"
            value={description}
            className="form-control"
            id="desc" placeholder="XYZ"/>
  </div>
  <div className="school-img">
  <label for="exampleFormControlInput1">Image for your School</label>
    <input onChange={(e) => setImage(e.target.value)}
            name="image"
            value={Image}
            className="form-control"
            id="image" placeholder="www.xyz.com"/>
</div>

<div className="addSchoolForm">
            <label className="col-sm-3 col-form-label">Fees Structure</label>

            <div className="form-group row">
            <label className="col-sm-3 col-form-label">0-5</label>
            <div className="col-sm-2 mt-2">
              Yes <input type="radio" className="mx-2" name="isyes" value="1" onClick={ ()=>setzerotofive(true)} />
            </div>
            <div className="col-sm-2 mt-2"> 
            No <input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setzerotofive(false)} />
            </div>
          </div>
            {/* <div className="col-sm-2 mt-2">
              0-5 <input type="radio" className="mx-2" name="isyes" value="1" onClick={ ()=>setzerotofive(true)} />
            </div> */}
            {/* <div className="col-sm-2 mt-2"> 
            No <input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setVisible(false)} />
            </div>
          </div> */}
         
         <div className="form-group row">
            <label className="col-sm-3 col-form-label">6-10</label>
            <div className="col-sm-2 mt-2">
              Yes <input type="radio" className="mx-2" name="isyes" value="1" onClick={ ()=>setsixto10(true)} />
            </div>
            <div className="col-sm-2 mt-2"> 
            No <input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setsixto10(false)} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">PU</label>
            <div className="col-sm-2 mt-2">
              Yes <input type="radio" className="mx-2" name="isyes" value="1" onClick={ ()=>setPU(true)} />
            </div>
            <div className="col-sm-2 mt-2"> 
            No <input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setPU(false)} />
            </div>
          </div>
             { zerotofive &&

            <div className="form-group row">
            <label className="col-sm-3 col-form-label">Feeupto5</label>
            <div className="col-sm-6">
              <input onChange={(e) => setFeeupto5(e.target.value)}
            name="5"
            value={Feeupto5}
            className="form-control"
            id="5" placeholder="Enter fee" />
            </div>
            </div>
             }
             { sixto10 &&

<div className="form-group row">
<label className="col-sm-3 col-form-label">fee upto 10</label>
<div className="col-sm-6">
  <input onChange={(e) => setFeeupto10(e.target.value)}
            name="10"
            value={Feeupto10}
            className="form-control"
            id="10" placeholder="Enter fee" />
</div>
</div>

 }

{ PU &&

<div className="form-group row">
<label className="col-sm-3 col-form-label">fee upto 12</label>
<div className="col-sm-6">
  <input onChange={(e) => setFeeupto12(e.target.value)}
            name="12"
            value={Feeupto10}
            className="form-control"
            id="12" placeholder="Enter fee" />
</div>
</div>

 }
 </div>
{/* <div className="fee">
    <label for="exampleFormControlInput1">Fee-Details</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="1000"/>
  </div> */}
  <div className="exam">
    <label for="exampleFormControlInput1">Mode of admission</label>
    <input onChange={(e) => setMode(e.target.value)}
            name="mode"
            value={mode}
            className="form-control"
            id="mode" placeholder="xyz"/>
  </div>
  <div className="seats">
    <label for="exampleFormControlInput1">Total seats</label>
    <input onChange={(e) => setSeats(e.target.value)}
            name="s"
            value={seats}
            className="form-control"
            id="s" placeholder="60"/>
  </div>
  <div className="form-group row">
            <label className="col-sm-3 col-form-label">Seat Availability</label>
            <div className="col-sm-2 mt-2">
              Update <input type="radio" className="mx-2" name="isyes" value="1" onClick={ ()=>setseatAvailability(true)} />
            </div>
            <div className="col-sm-2 mt-2"> 
            Not Required to update <input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setseatAvailability(false)} />
            </div>
    </div>
    { seatAvailability &&

<div className="form-group row">
{/* <label className="col-sm-3 col-form-label">Seat Available in class 1</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat1(e.target.value)}
            name="s1"
            value={seat1}
            className="form-control"
            id="s1" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 2</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat2(e.target.value)}
            name="s2"
            value={seat2}
            className="form-control"
            id="s2" placeholder="Enter Seats Available in class 2" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 3</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat3(e.target.value)}
            name="s3"
            value={seat3}
            className="form-control"
            id="s3" placeholder="Enter Seats Available in class 3" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 4</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat4(e.target.value)}
            name="s4"
            value={seat4}
            className="form-control"
            id="s4" placeholder="Enter Seats Available in class 4" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 5</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat5(e.target.value)}
            name="s5"
            value={seat5}
            className="form-control"
            id="s5" placeholder="Enter Seats Available in class 5" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 6</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat6(e.target.value)}
            name="s6"
            value={seat6}
            className="form-control"
            id="s6" placeholder="Enter Seats Available in class 6" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 7</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat7(e.target.value)}
            name="s7"
            value={seat7}
            className="form-control"
            id="s7" placeholder="Enter Seats Available in class 7" />
</div>

{/* <label className="col-sm-3 col-form-label">Seat Available in class 8</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat8(e.target.value)}
            name="s8"
            value={seat8}
            className="form-control"
            id="s8" placeholder="Enter Seats Available in class 8" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 9</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat9(e.target.value)}
            name="s9"
            value={seat9}
            className="form-control"
            id="s9" placeholder="Enter Seats Available in class 9" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 10</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat10(e.target.value)}
            name="s10"
            value={seat10}
            className="form-control"
            id="s10" placeholder="Enter Seats Available in class 10" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 11</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat11(e.target.value)}
            name="s11"
            value={seat11}
            className="form-control"
            id="s11" placeholder="Enter Seats Available in class 11" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 12</label> */}
<div className="col-sm-6">
  <input onChange={(e) => setseat12(e.target.value)}
            name="s12"
            value={seat12}
            className="form-control"
            id="s12" placeholder="Enter Seats Available in class 12" />
</div>
</div>



 }
  
  <div className="phone">
    <label for="exampleFormControlInput1">Contact no:</label>
    <input onChange={(e) => setcontact(e.target.value)}
            name="ct"
            value={contact}
            className="form-control"
            id="ct" placeholder="9870654321"/>
  </div>
  <button type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
           >Login</button> 
  </form>
  </div>
  )
}

export default School
