import React,{useState, useEffect} from 'react';
import Asrouter from './Routes';
import Logo from './Components/Logo';
import ProductContextProvider from './Context/ProductContext'
import './App.css';
import {CartProvider} from './Context/CartContext'



function App() {

  
  return (
    <ProductContextProvider>
      <CartProvider>
    <div className="App">
      
      <Asrouter />
    </div>
    </CartProvider>
    </ProductContextProvider>
  );
}

export default App;
