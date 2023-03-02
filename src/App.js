import React, {useEffect, useState} from "react";
import "./App.css";
import Layout from "./layout/Layout";
import axios from "axios"
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [dater, setDater] = useState("30000000000");
  console.log(dater);
  
  
  useEffect(() => {
   axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key : "DEMO_KEY",
        date: dater,
        
      }
    })
    .then(function (response) {
      console.log(response);
      setProducts(response.data);
           
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    }); 

  },[]);
  console.log(products);
  
  return (
    <Layout products={products} dater={setDater} />
  );
}

export default App;
