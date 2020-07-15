import React from 'react';
import { Link } from "react-router-dom";
import Shoes from './../Shoes.json';
import Paper from '@material-ui/core/Paper';
export default function Products(){
    return(
        <div className="productContainer" >
            {Object.keys(Shoes).map(keyName =>{
               const shoe = Shoes[keyName];
                
                return(
                    <Paper className="link" elevation={5}>
                    <Link key={keyName} 
                    to={`/products/${keyName}`}>
                        <h3 className="title">{shoe.name}</h3>
                        <img src={shoe.img}alt={shoe.name} height={300} />
                    </Link></Paper>)
                    
                
            })}
        </div>
    );
}