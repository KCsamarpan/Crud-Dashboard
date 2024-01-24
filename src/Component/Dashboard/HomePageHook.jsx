import axios from "axios";
import { useEffect, useState } from "react";

const useHome=()=>{
    const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [styleChanged , setStyleChanged]= useState(false)

  useEffect(() => {
    const fetchData = async (imageArray) => {
      try {
        const apiItems = await axios.get("https://dummyjson.com/products");
        // const apiItems = await axios.get("http://localhost:3000/proApi" , {imageArray});
        const response = apiItems.data.products;
        setData(response);
      } catch (error) {
        console.log("error occurred", error);
      }
    };
    // const imageArray= ["sandesh" , "rajiv"];
    fetchData(); 
  }, []);



  const filterdata = data.filter((items) =>
    items.title.toLowerCase().includes(searchTerm.toString().toLowerCase())
  );

  const handleChange=()=>{
    setStyleChanged(!styleChanged)
  }

   return {handleChange , filterdata  ,searchTerm ,setSearchTerm}
}

export default useHome