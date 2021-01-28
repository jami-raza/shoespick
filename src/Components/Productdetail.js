import React,{useState,useContext} from 'react';
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {Shoes} from './../Shoes';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Review from './review'; 
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {cartContext} from '../Context/CartContext';
import {ProductContext} from '../Context/ProductContext';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'20px'
  },
  paper: {
    height: 500,
    width: 'TextareaAutosize',
    
    
  },
  
  img:{
      height:400,
      
      boxShadow:'0 0 10px #463636',
  },
  paper1:{
      width: '550px',
      
      marginTop:'40px'
      
      

  },
  price: {
    marginTop:'50px'

  },
  desc:{
    marginTop:'320px'
  }
}));

export default function SpacingGrid() {
  
  const classes = useStyles();
  const {dispatch} = useContext(cartContext)
  
  const {id} = useParams()
  const {products} = useContext(ProductContext)
  
    const shoe = products[id]
    console.log(shoe)
    const navigate = useNavigate();

    const addToCartHandler = () => {
      dispatch({
          type:"Add_To_Cart",
          id:shoe.id,
          product:shoe
      })
      
  }

  const ShopNowHandler = () => {
      dispatch({
          type:"Add_To_Cart",
          id:shoe.id,
          product:shoe
      });
      navigate('/cart') 
  }

  if(!shoe){ 
    return <h2>Product Not Found</h2>
    } 
  return (
    
    <div >
          {[0].map(value => (

            <Grid key={shoe.id} container className={classes.root}>
            
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={classes.paper}>
            <h3>{shoe.name}</h3>
            <img className={classes.img} src={shoe.img} alt={shoe.name} />
            </div>
            
            </Grid>
            
          
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.desc}>
              <Paper elevation={0} className={classes.paper1}>
            <p>{shoe.desc}</p>
            </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className={classes.price}>
              <List style={{border:'1px solid grey',maxWidth:'300px'}}>
                <ListItem >
                  <ListItemText secondary="Price" />
                  <ListItemText primary={`$ ${shoe.price}`}/>
                  
            </ListItem>
            <ListItem >
                  <ListItemText secondary="Ratings" />
                  <ListItemText><Review value={shoe.reviews}/></ListItemText>
                  
            </ListItem>
            <ListItem >
                  <ListItemText secondary="Delivery" />
                  <ListItemText primary="Free Delivery"/>
                  
            </ListItem>
            </List>
            <ButtonGroup style={{marginTop:'10px',padding:'10px'}}>
                  <Button color="primary" onClick={addToCartHandler}>Add to Cart <AddShoppingCartIcon/></Button>
                  
                  
                  <Button color="secondary" onClick={ShopNowHandler}>Shop now <ShoppingBasketIcon/></Button>
                  

                  </ButtonGroup>   
                    
                  
            
              
            </Grid>
            
            </Grid>
            ))}   
        
        </div>
      
    
  );
}
