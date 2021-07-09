import React,{useState,useEffect} from 'react';
import './App.css';
import Products from './products/Products';
import Navbar from './components/Navbar/Navbar'
import {commerce} from './lib/com_prod'

function App() {
  const [products,setProducts]=useState([]);
  const fetchProducts=async()=>{
    const {data}=await commerce.products.list();
    setProducts(data);
  }
  useEffect(()=>{
    fetchProducts();
  },[])
  console.log(products);
  return (
    <div className="App">
    <Navbar/>
      Spicy Crunch 🍕
      <Products products={products}/>
    </div>
  );
}

export default App;
