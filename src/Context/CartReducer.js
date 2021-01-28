

const CartReducer = (state, action) => {

    //Now we destructure state
    
    const {shoppingcart, qty, totalprice} = state;
    let product;
    let updatedQty;
    let updatedPrice;
    switch(action.type){
        case "Add_To_Cart":
            const check = shoppingcart.find(product => product.id === action.id);
            if(check){
                return state;

            } else {
                product=action.product;
                product['qty'] = 1;
                updatedQty = qty + 1;
                updatedPrice = totalprice + product.price;

                return {shoppingcart:[product,...shoppingcart],qty:updatedQty,totalprice:updatedPrice}
            }
        case "Remove_to_cart":
            console.log()
              return {
               shoppingcart: [...shoppingcart].filter(product => product.id !== action.id)
                  
              }
        
            default:
                return state;
    }
}   

export default CartReducer;