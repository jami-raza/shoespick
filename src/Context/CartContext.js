import React, { createContext, useReducer } from "react";
import CartReducer from './CartReducer';
import {Shoes} from '../Shoes'
/*context object allows state to be shared among 
components without using props.*/

export const cartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, {shoppingcart:[],qty:0,totalprice:0});

    /*function delProduct(id){
        dispatch({
            type:"Remove_to_cart",
            payload : id
        })
    } */

    return (
        <cartContext.Provider
        value={{...cart, dispatch}}
        >
            {children}
        </cartContext.Provider>
    )
};
