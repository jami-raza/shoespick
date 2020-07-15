import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
    
  },
  menuButton: {
    marginRight: theme.spacing(5),
    alignItems: 'right',
    justifyContent:'space-between',
    color:'#f8f8ff',
    textDecoration:'none',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        
          
            
          
          <Typography variant="h6" color="inherit" >
          
            <Link className={classes.menuButton}to ="/">Home</Link>
            <Link className={classes.menuButton}to ="/About">About</Link>
            <Link className={classes.menuButton}to ="/Products">Product</Link>
        
          </Typography>
        
      </AppBar>
    </div>
  );
}
