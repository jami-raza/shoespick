import React,{useContext} from 'react'
import {ProductContext} from '../Context/ProductContext'
import Products from './Productindex'
import {Grid} from '@material-ui/core'



const Product = () => {

    const {products} = useContext(ProductContext)
    return (
        <Grid container>
        
            {products.map(product => (
                <Grid key={product.id} item xs={12} sm={12} md={4} lg={3} xl={3}>
                <Products key={product.id} shoe={product}/>
                </Grid>
            ))}
            
        </Grid>
    )
}

export default Product;
