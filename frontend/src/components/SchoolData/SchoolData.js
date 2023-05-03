import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function SchoolData() {
    const {id} = useParams()
    const [schoolDetails,setSchooldetails]=useState({});
    console.log("ID of the school",id);
    useEffect(()=>{
        const fetchData=async()=>{
            const data=await axios.get(`apilink?id=${id}`)
            const response=data.data;
        }
    },[])
  return (
    <div>
      {`Id of the school is ${id}`}
    </div>
  )
}

export default SchoolData
