import React from 'react';
import './css/main.css'; // Assuming you have a CSS file at './css/main.css'

const Dashboard = () => {
  return (
    <div className="main">
      <div className="navbar">
        <span className="best">Best</span>
        <span className="deal">Deal</span>
        <span className="tech">Tech Shop</span>
        <div className="navbar-heading">
          <span className="home">Home</span>
          <span className="add">Add to cart</span>
          <span className="home2">Home</span>
          <div className="bar"></div>
        </div>
        <div className="iphonegroup"></div>
        <div className="applelogo"></div>
        <div className="profile"></div>
        <div className="search"></div>
      </div>
    </div>
  );
};

export default Dashboard;
