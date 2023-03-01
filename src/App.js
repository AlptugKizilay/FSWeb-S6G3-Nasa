import React, {useEffect, useState} from "react";
import "./App.css";
import Layout from "./layout/Layout";
import axios from "axios"

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key : "DEMO_KEY"
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
    <Layout products={products} />
  );
}

export default App;
