import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Logo from './Logo'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
    
  },
  menuButton: {
    marginRight:'10px',
    paddingTop:'100%',
    
    
    color:'#f8f8ff',
    textDecoration:'none',
  },
  appbar : {
    display:'flex',
    justifyContent:'space-between'
  },
  brand : {
    textDecoration:'none',
    color:'#fff',
    marginRight:'20px'
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <AppBar position="static" >
        <div className={classes.appbar}>
        <div>  
            
      <Link className={classes.brand} to ="/"><Logo /></Link>
      </div>
      <div style={{marginTop:'25px'}}>
          <Typography variant="h6" color="inherit" >
          
            <Link className={classes.menuButton}to ="/">Home</Link>
            <Link className={classes.menuButton}to ="/About">About</Link>
            <Link className={classes.menuButton}to ="/Products">Product</Link>
        
          </Typography>
        </div>
        <div style={{display:'flex',padding:'30px'}}>
          <div style={{marginRight:"15px"}}>
          <Link className={classes.menuButton}to ="/cart">
          <ShoppingCartIcon/>
          </Link>
          </div>
          <div >
          Login<span style={{marginTop:'20px'}}><LockOpenIcon /></span>
          </div>
        </div>
        </div>
      </AppBar>
    </div>
  );
}
