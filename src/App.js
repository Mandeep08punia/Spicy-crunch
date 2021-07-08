import React from 'react';
import './App.css';
import Products from './products/Products';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
    <Navbar/>
      Spicy Crunch 🍕
      <Products/>
    </div>
  );
}

export default App;
