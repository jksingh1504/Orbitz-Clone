import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const HotelCards = () => {
  const[data,setdata]=useState([])
  
  useEffect(()=>{
  
    const getdata=async()=>{
      let r=await axios.get(`https://orbitz-heroku-data.herokuapp.com/hotels`);
      console.log(r.data);
      setdata(r.data)
    }

    getdata()
  },[page])
  return (
    <div>

    </div>
  )
}

export default HotelCards