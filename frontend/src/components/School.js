import React from 'react'
import { useState } from 'react';
import './school.css'
const School = () => {
  const [zerotofive, setzerotofive]=useState(false);
  const [sixto10, setsixto10]=useState(false);
  const [PU, setPU]=useState(false);
  const [seatAvailability, setseatAvailability]=useState(false);
  return (
  
    <div>
      <form>
  <div className="school-name">
    <label for="exampleFormControlInput1">School Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Schoolname"/>
  </div>
  <div className="aff-group">
    <label for="exampleFormControlInput1">Affiliation-type</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="CBSE/ICSE/KARNATAKA BOARD"/>
  </div>
  <div className="address">
    <label for="exampleFormControlInput1">Address</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="XYZ"/>
  </div>
  <div className="Institution">
    <label for="exampleFormControlInput1">Institution Type</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="XYZ"/>
  </div>
  <div className="description">
    <label for="exampleFormControlInput1">Description</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="XYZ"/>
  </div>
  <div className="school-img">
  <img src="..." className="rounded" alt="..."/>
</div>

<div className="form-group row">
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
              <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter fee" />
            </div>
            </div>
             }
             { sixto10 &&

<div className="form-group row">
<label className="col-sm-3 col-form-label">fee upto 10</label>
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter fee" />
</div>
</div>

 }

{ PU &&

<div className="form-group row">
<label className="col-sm-3 col-form-label">fee upto 12</label>
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter fee" />
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
    <input type="txet" className="form-control" id="exampleFormControlInput1" placeholder="xyz"/>
  </div>
  <div className="seats">
    <label for="exampleFormControlInput1">Total seats</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="60"/>
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
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 2</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 3</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 4</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 5</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 6</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 7</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>

{/* <label className="col-sm-3 col-form-label">Seat Available in class 8</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 9</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 10</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 11</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
{/* <label className="col-sm-3 col-form-label">Seat Available in class 12</label> */}
<div className="col-sm-6">
  <input type="text"  className="form-control" id="msg" name="msg" placeholder="Enter Seats Available in class 1" />
</div>
</div>



 }
  
  <div className="phone">
    <label for="exampleFormControlInput1">Contact no:</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="9870654321"/>
  </div>
  </form>
  </div>
  )
}

export default School
