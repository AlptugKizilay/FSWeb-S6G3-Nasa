import React, {useEffect, useState} from "react";
import "./App.css";
import Layout from "./layout/Layout";
import axios from "axios"


function App() {
  const [products, setProducts] = useState([]);
  const [dater, setDater] = useState();
  console.log(dater);
  
  
  useEffect(() => {
   axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key : "j5h5ir7q7ru5NhsI22o2tlHAGihfn3M848dsKdGw",
        date: dater
        
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

  },[dater]);
 /*  console.log(products); */
  
  return (
    <Layout products={products} dater={setDater} />
  );
}

export default App;
