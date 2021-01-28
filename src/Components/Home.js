import React from 'react';
import Products from './Productindex'
export default function Home(){
    return(
        <div >
            
            <img style={{width:'100%',height:'400px',objectFit:'contain',margin:'50px 0 50px 0'}} className="img" src="https://media1.giphy.com/media/3oEjHW5ZfmQsI2rUuk/giphy.gif"title="Shoe Pick"alt="ShoePick"/>
            
            <Products />
        </div>
    )
}