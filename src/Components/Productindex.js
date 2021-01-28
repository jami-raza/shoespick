import React,{useContext,useState} from 'react';
import { Link } from "react-router-dom";
import {Shoes} from '../Shoes';
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
import {ProductContext} from '../Context/ProductContext'
import {cartContext} from '../Context/CartContext'
import {useNavigate} from 'react-router-dom';



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
    
    const {dispatch,qty} = useContext(cartContext);
    const [quantity,setQty] = useState(1)
    const {products} = useContext(ProductContext)
    console.log(products)

    const shoes = Object.keys(products)
    console.log(shoes)

    const navigate = useNavigate()


    return (
        
        <Grid container className={classes.container} direction="row" justify="space-between">
           
              
                {Object.keys(products).map(KeyName => {
                    const shoe = products[KeyName]
                    const addToCartHandler = () => {
                        dispatch({
                            type:"Add_To_Cart",
                            id:shoe.id,
                            product:shoe,
                            
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
                    
                    return (
                        <Card key={KeyName}>
                    <Link
                    key={KeyName}
                    className={classes.link}
                to={`/products/${KeyName}`}>
                    <img src={shoe.img}alt={shoe.name} height={300} />
                    <h3 className="title">{shoe.name}</h3>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <h4 style={{fontSize:'24px',color:'#800000'}}>{shoe.price}<span><AttachMoneyIcon/> </span></h4>
                    <div style={{marginTop:'20px'}}><Reviews value={shoe.reviews}/></div>
                    </div>
                    </Link>
                    
                    <ButtonGroup variant="text" style={{padding:'10px'}}>
                    <Button color="primary" className={classes.button} onClick={addToCartHandler}>Add to Cart <AddShoppingCartIcon/></Button>
                    <Button color="secondary" className={classes.button} onClick={ShopNowHandler}>Shop now <ShoppingBasketIcon/></Button>
                    </ButtonGroup>
                    </Card>
                
                    )
                })}
                
                

                
               

               
                    
                    
                
               
                
            
            </Grid>
    );
}