import React from 'react'
import { useSelector } from 'react-redux/es/exports';
const HotelListner = () => {
    const products=useSelector((state)=>state);
    const renderList=products.map((product)=>{
        const{id,name,city,price}=product;
        return(
            <div key={id}>
            <div className="cards">
                <div className="image">
                    {/* <img src={images}/> */}
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="city">{city}</div>
                    <div className="price">{price}</div>
                </div>

            </div>
            </div>
        );
    })
//   console.log(products)
  return (
    <div>
        <>
        {renderList}
        </>
    </div>
  )
}

export default HotelListner