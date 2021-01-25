import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Shoes from './../Shoes.json';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Reviews from '../Components/review';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    link: {
      textDecoration: "none",
      color:"black",

    },
    card: {
        borderRadius:'10px',
        margin:'10px',
        padding:'10px'
    },
    button: {
        marginRight:'10px'
        
    },
    container: {
        marginRight:"10px"
    }

  });


export default function Products(){
    
    const classes = useStyles()

    console.log(Shoes)
    
    
    
    return (
        
        <Grid container className={classes.container}>
           {Object.keys(Shoes).map(keyName => {
               const shoe = Shoes[keyName]
                
               return(

                <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Link key={keyName} 
                    className={classes.link}
                to={`/products/${keyName}`}>
                    <Card className={classes.card}>
                    <img src={shoe.img}alt={shoe.name} height={300} />
                    <h3 className="title">{shoe.name}</h3>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <h4 style={{display:'flex',textAlign:'center',color:"grey"}}>price :<span ><AttachMoneyIcon/></span> {shoe.price}</h4>
                    <div style={{marginTop:'20px'}}><Reviews value={shoe.reviews}/></div>
                    </div>
                    <ButtonGroup variant="text" style={{padding:'10px'}}>
                    <Button color="primary" className={classes.button}>Add to Cart <AddShoppingCartIcon/></Button>
                    <Button color="secondary" className={classes.button}>Shop now <ShoppingBasketIcon/></Button>
                    </ButtonGroup>
                    </Card>
                </Link>
                
                </Grid>
               ) 

           })}
               
            </Grid>
    );
}