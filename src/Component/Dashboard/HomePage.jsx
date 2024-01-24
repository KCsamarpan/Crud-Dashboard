import React from "react";
import "./css/main.css";
import { motion, spring } from "framer-motion";
import { Link } from "react-router-dom";
import useHome from "./HomePageHook";

const HomePage = () => {
  const {handleChange , filterdata , styleChanged , searchTerm , setSearchTerm}= useHome();
  return (
    <div className="maindiv">
      <div className="main">
        <div className="menulogo">
        <i className="fa-solid fa-bars fa-2xl" onClick={handleChange}  style={{width: "200%" , position: "fixed" , zIndex: 2 , marginLeft: "80px" , marginTop: "49px"}}></i>
        </div>
        <motion.div className="navbar">
          <motion.span
            whileInView={{
              marginLeft: "-40px",
            }}
            transition={{
              duration: 2,
              stiffness: "spring",
            }}
            className="best"
          >
            Best
          </motion.span>
          <motion.span
            whileInView={{
              marginLeft: "40px",
            }}
            transition={{
              duration: 2,
              stiffness: "spring",
            }}
            className="deal"
          >
            Deal
          </motion.span>
          <span className="tech">Tech Shop</span>
          <div className="navbar-heading">
          <div id="mySidenav" className={styleChanged ? "sidenav1" :  "sidenav"} >
  {/* <a href=""  id="closebtn" onClick={handleReset} >&times;</a> */}
  <a href="#">Home</a>
  <Link to="/product">Product</Link>
</div>
          </div>
          <motion.div

            className="iphonegroup"
          ></motion.div>
          <motion.div
            animate={{
              marginTop: "580px",
            }}
            transition={{
              duration: 3,
              type: "spring"
            }}
            className="applelogo"
          ></motion.div>
          <div className="profile"></div>
          <div className="searchInput">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="  search..."
            />
          </div>
          <div className="search"></div>
        </motion.div>
      </div>
      {/* api export */}

      <h1 className="productheading">Product's</h1>
      <motion.div className="product-section">
        {filterdata.map((items, index) => {
          return (
            <div key={index} className="productlist">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="card"
                style={{ width: "18rem" }}
                key={items.id}
              >
                <img src={items.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{items.title}</h5>
                  <p className="card-text">{items.description}</p>
                  <p className="card-text">price: ${items.price}</p>
                  <a href="#" className="btn btn-primary">
                    add to cart
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default HomePage;
