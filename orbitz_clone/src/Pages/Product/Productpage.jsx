import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';

import "./Product.css"
import GroupBar from './Sort';
const Productpage = () => {
  const [category, setCategory] = useState("");
  const [priceOption, setpriceOption] = useState("");
  const handleSelectCategory = (item) => {
    setCategory(item);
  };

  const handleSelectPriceOption = (item) => {
    setpriceOption(item);
  };
  const [page,setpage]=useState(1)
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

        <h1>Product Productpage     
        </h1>
        <GroupBar 
           handleSelectCategory={handleSelectCategory}
           handleSelectPriceOption={handleSelectPriceOption}
        />

        
      
        {data.map((data,index)=>(
            <div className="row">
             
                <div className="col-sm-1"></div>
                <div className="col-sm-4">
                  filter
                </div>
            
                  
                <div className="col-sm-6 cardstotal">
                 <div className="col-sm-6">
                  <img src={data.images[1].url} style={{height:"200px"}}/>
                 </div>
                 <div className="col-sm-6">
                   <p>Viewed</p>
                   <h2 style={{color:"black"}}>{data.name}</h2>
                   <p>{data.address}</p>
                    <br></br><br></br>
                    <p>{data.paymentType}</p>
                    <p>${data.rating}good (reviews) </p>

                    <div className='side'>
                          <button className='btn'><p style={{color:"white"}}>25% off</p></button>
                          <h2 style={{fontWeight:"bold" ,fontSize:"20px",marginLeft:"40%"}}>{data.price}</h2>
                    
                    </div>
                 </div>
                  
                </div>
                <div className="col-sm-1"></div>

              </div>
          
        
        ))}
       
    </div>
  )
}

export default Productpage


// "id": 1,
// "name": "Taj Palace",
// "area": "Rajpath Marg",
// "rating": 4.6,
// "reviews": 745,
// "price": 2200,
// "delas": 0,
// "city": "Delhi",
// "paymentType": "Fully Refundable",
// "propertyType": "Hotel",
// "address": "2 Sardar Patel Marg, New Delhi, Delhi N.C.R, 110 021",
// "images": [
// {
// "url": "https://images.trvl-media.com/hotels/1000000/470000/465100/465005/b6be1b6d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
// },