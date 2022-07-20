
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
const HotelCards = () => {
  const products=useSelector((state)=>state);
      const fetchproducts=async()=> {
      const response = await axios
      .get("https://orbitz-heroku-data.herokuapp.com/hotels")
      .catch((err)=> {
        console.log("Err",err);
      })
      console.log(response.data)
    };
    useEffect(()=>{
     fetchproducts()
    },[])
     console.log("Products:",products)
  return (
    <div>
  <div className="cards">
      <div className="image"></div>
      <div className="content">
        <div className="header"></div>
      </div>
      
  </div>
    </div>
  )
}

export default HotelCards