import React, { useEffect, useState } from "react";
import Card from "./Card2";
// import Contacts from './data';
import axios from 'axios';


function App2() {
  const [allSchools,setAllSchools]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const data=await axios.get('http://localhost:5000/api/add/listSchool');
      // console.log("Allschools ",data);
      setAllSchools(data.data);
    }
fetchData();
  },[])
  return (
    <div>
      <h1 className="heading">College List</h1>
      {allSchools.map((data,key)=>{
           return  (
            <Card
            key={key}
            id={data._id}
            name={data.school_name}
            img={data.pic_link}
            fees = {data.fee_upto10}
            type = {data.affiliation}
            board = {data.type}
            add = {data.address}
            />
                      )
      })};
  
    </div>
  );
}

export default App2;
