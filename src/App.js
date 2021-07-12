import React,{useState,useEffect} from 'react';
import './App.css';
import Products from './products/Products';
import Navbar from './components/Navbar/Navbar'
import {commerce} from './lib/com_prod'
import Cart from './components/Cart/Cart';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

function App() {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState({});
  const ProductsAvail=async()=>{
    const {data}=await commerce.products.list();
    setProducts(data);
  }
  const fetchCartState=async()=>{
    const cart=await commerce.cart.retrieve();
    setCart(cart);
  }
  const AddToCart=async(productId,quantity)=>{
    const item=await commerce.cart.add(productId,quantity);
    setCart(item.cart)
  }
  const UpdateCartQty=async(productId,quantity)=>{
    const response=await commerce.cart.update(productId,{quantity});
    setCart(response.cart);
  }
  const RemoveFromCart=async(productId)=>{
    const {cart} =await commerce.cart.remove(productId);
    setCart(cart);
  }
  const handleEmptyCart=async()=>{
    const {cart}=await commerce.cart.empty();
    setCart(cart);
  }
  useEffect(()=>{
    ProductsAvail();
    fetchCartState();
  },[])
  
console.log(cart);
  return (
    <Router>
    <div>
    <Navbar totalItems={cart.total_items}/>
      <Switch>
      <Route exact path="/">
      <Products products={products} onAddToCart={AddToCart}/>
      </Route>
      <Route exact path="/cart">
      <Cart cart={cart} 
        UpdateCartQty={UpdateCartQty}
        RemoveFromCart={RemoveFromCart}
        handleEmptyCart={handleEmptyCart}
        />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
