import React,{useContext, useState, useEffect} from 'react'
import {cartContext} from '../Context/CartContext'
import {Grid, List, ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useParams} from 'react-router-dom';
const useStyles = makeStyles({
    cartBody:{
        margin:'10px 20px 10px 20px',
        padding:'10px',
        backgroundColor:'#fdf2f4',
        fontFamily:'Arial, senserif',
        textAlign:'left',
         
    },
    h1 :{
        color:'#283747',
        fontSize:'48px'
    }
    
})

const Cart = () => {

    const classes = useStyles();
    
    const cartdata = useContext(cartContext)
    console.log(cartdata.qty)
    //cartdata recieves two parameter State and dispatch 
    


    const data = cartdata.shoppingcart
    const {dispatch} = useContext(cartContext)
    const id = data.map(shoe => shoe.id)
    console.log(id)
    const [quantity,setQuantity] = useState(1)
    console.log(data.length)
    
    const total = data.reduce((toa,obj) => obj.price + toa,0)
    
    
    
    return (
        <div className={classes.cartBody}>
            <h1 className={classes.h1}>Cart</h1>
            <Grid item xs={8} sm={8} md={10} lg={10} xl={10} style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    {data.length === 0 ? <h1>You have no items in your cart</h1>:
                    (<div><h1>Your Items</h1><span>{data.length}</span>
                    <h3>Total Price <span>{total * quantity}</span></h3></div>)}
                </Grid>
            {data.map((shoe) => {

const RemoveItem = () => {
    dispatch({
        type:'Remove_to_cart',
        id:shoe.id,
        product:shoe
    })
}

                return (
                    <Grid>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt={shoe.name} src={shoe.img}/>
                                </ListItemAvatar>
                                <ListItemText>
                                    <h3>{shoe.name}</h3>
                                </ListItemText>
                                <ListItemText>
                                    <input type="number" 
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    />
                                    
                                </ListItemText>
                                <ListItemText>
                                    <button onClick={RemoveItem}>Add</button>
                                    
                                </ListItemText>
                                <ListItemText>
                                    {shoe.price * quantity}
                                    
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                )
                })}
                
            </div>      

                
                    
                
           
        
    )
}

export default Cart;
