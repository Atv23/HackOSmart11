import React, { useEffect, useState } from "react";
import Card from "./Card";
import Contacts from './data';
import axios from 'axios';


function App1() {
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
      <h1 className="heading">School List</h1>
      {allSchools.map((data,key)=>{
           return  (
            <Card
            key={key}
            id={data._id}
            name={data.school_name}
            img={data.imgURL}
            fees = {data.fees}
            type = {data.type}
            board = {data.board}
            grade= {data.grade}
            add = {data.address}
            />
                      )
      })};
  
    </div>
  );
}

export default App1;
