import React from 'react';
import { useParams } from "react-router-dom";
import Shoes from './../Shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 500,
    width: 'TextareaAutosize',
    
  },
  control: {
    padding: theme.spacing(2),
  },
  img:{
      height:400,
      align:'left',
      boxShadow:'0 0 10px #463636',
  },
  paper1:{
      width: 550,
      height: 200,
      marginTop:'80px',
      textAlign:'center',
      
      

  }
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();


  const {id} = useParams();
    const shoe = Shoes[id];
    if(!shoe){ 
    return <h2>Product Not Found</h2>
    } 

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={12}>
        <Grid container spacing={spacing}>
          {[0].map((value) => (
            <Grid key={value} item>
            <Paper justify="right" className={classes.paper}>
            <h3>{shoe.name}</h3>
            <img className={classes.img} src={shoe.img} alt={shoe.name} />
            </Paper>
            
            </Grid>
          ))}
          <Paper justify="left" className={classes.paper1}>
            <p>{shoe.desc}</p>
            </Paper>
        </Grid>
      </Grid>
      
              
        
      </Grid>
    
  );
}
