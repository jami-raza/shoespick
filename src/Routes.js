import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Productdetail from './Components/Productdetail';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import About from './Components/About';
import Productindex from './Components/Productindex';
import Product from './Components/Product';
import Cart from './Components/cart'

import Notfound from './Components/Notfound';
function Asrouter(){
    return(
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="About" element={<About/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="Products" element={<Products/>}>
                        <Route path="/" element={<Productindex/>}/>                    
                        <Route path="/:id" element={<Productdetail/>}/>
                    </Route>   
                    <Route path="*" element={<Notfound/>}/> 
                </Routes>
            </Router>
        </div>
    )
}
export default Asrouter;