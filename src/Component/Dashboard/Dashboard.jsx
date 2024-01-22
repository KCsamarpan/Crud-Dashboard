import React, { useEffect, useRef, useState } from 'react';
import './css/main.css'; 
import axios from 'axios'
import  { motion, spring } from 'framer-motion'


const Dashboard = () => {

  const [data , setData]=useState([]);

useEffect(()=>{
  const fetchData=async ()=>{
    try{
      const apiItems= await axios.get("https://dummyjson.com/products");
      const response= apiItems.data.products;
      setData(response);
    }catch(error){
      console.log("error occurred", error);
    }
  }
  fetchData();
}, []);
  
const handleSearch=()=>{
  return <div>
    <input type="text" />
  </div>
}

  return (
    <div className="maindiv">
      <div className="main">
      <motion.div className="navbar"  >
        <motion.span 
        whileInView={{
          marginLeft: "-40px"
        }}
        transition={{
          duration: 2,
          stiffness: "spring"
        }}
        className="best">Best</motion.span>
        <motion.span
         whileInView={{
          marginLeft: "40px"
        }}
        transition={{
          duration: 2,
          stiffness: "spring"
        }}
        
        className="deal">Deal</motion.span>
        <span className="tech">Tech Shop</span>
        <div className="navbar-heading">
          <span className="home">Home</span>
          <span className="add">Add to cart</span>
          <span className="home2">Home</span>
          <div className="bar"></div>
        </div>
        <div className="iphonegroup"></div>
        <motion.div
         animate={{
          marginTop: "580px"
        }}
        transition={{
          duration: 3,
          stiffness: spring
        }}
        className="applelogo"></motion.div>
        <div className="profile"></div>
        <div className="searchInput">
          <input type="text" placeholder='  search...' />
        </div>
        <div className="search" onClick={handleSearch}></div>
 
      </motion.div>
    </div>
    {/* api export */}
<div className="product-section">
{
  data.map((items , index)=> {
    return <div key={index} className='productlist'>
   <div className="card" style={{width: '18rem'}} key={items.id}>
        <img src={items.images[0]}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{items.title}</h5>
          <p className="card-text">{items.description}</p>
          <p className="card-text">price: {items.price}</p>
          <a href="#" className="btn btn-primary">add to cart</a>
        </div>
      </div>

    </div>
  })
}





     </div>  
    </div>
  );
};

export default Dashboard;
