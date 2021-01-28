import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
const Checkout = () => {

    const {email, setEmail} = useState('abc@123')
    const navigate = useNavigate()
    

    return (
        <div>
            
                <input type="email" id="email" name="email" placeholder="email" value={email}/> 
                <button onClick={() => navigate('/')}>Login</button>
            
        </div>
    )
}

export default Checkout
