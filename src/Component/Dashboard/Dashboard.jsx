import React, { useEffect, useState } from "react";
import "./css/main.css";
import axios from "axios";
import { motion, spring } from "framer-motion";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiItems = await axios.get("https://dummyjson.com/products");
        const response = apiItems.data.products;
        setData(response);
      } catch (error) {
        console.log("error occurred", error);
      }
    };
    fetchData();
  }, []);

  const filterdata = data.filter((items) =>
    items.title.toLowerCase().includes(searchTerm.toString().toLowerCase())
  );

  return (
    <div className="maindiv">
      <div className="main">
        <div className="menulogo">
        <i class="fa-thin fa-bars"></i>
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
          <div id="mySidenav" className="sidenav">
  <a href="" className="closebtn">&times;</a>
  <a href="#">Home</a>
  <a href="#">Product</a>
  {/* <a href="#"></a>
  <a href="#">Contact</a> */}
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
                  <p className="card-text">price: {items.price}</p>
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

export default Dashboard;
