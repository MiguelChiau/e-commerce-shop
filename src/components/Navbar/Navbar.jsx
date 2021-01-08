// import React from 'react'
// import {AppBar,
// Toolbar,
// IconButton,
// Badge,
// MenuItem,
// Menu,
// Typography
// } from "@material-ui/core"
// import {ShoppingCart, Toll} from "@material-ui/icons"
// // import classes from '*.module.css'

// import useStyles from "./styles"

// // import logo from "../../assets/noun_Shoe_14537.png"
// import logo from "../../assets/commerce.png"


// function Navbar() {
//     const classes = useStyles()
//     return (
//         <>
//            <AppBar position="fixed" className={classes.appBar} color="inherit">
//                <Toolbar>
//                    <Typography variant="h6" className={classes.title} color="inherit">
//                        <img src={logo} alt="Commerce.js" height="45px" className={classes.image} />
//                    </Typography>
//                </Toolbar>

//                {/* This empty div is to take as much space as we want */}
//                <div className={classes.grow}/>
//                <div className={classes.button}>
//                    <IconButton aria-label="Show cart items" color="inherit">
//                        <Badge badgeContent={2} color="secondary">
//                            <ShoppingCart/>
//                        </Badge>
//                    </IconButton>
//                </div>

//            </AppBar>


            
//         </>
//     )
// }

// export default Navbar


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
Badge,
MenuItem,
Menu,
} from "@material-ui/core"
import {ShoppingCart, Toll} from "@material-ui/icons"


// import logo from "../../assets/noun_Shoe_14537.png"
import logo from "../../assets/commerce.png"

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    display: 'flex',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
             <img src={logo} alt="" height="45px" className={classes.image} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Migzs Shop
          </Typography>

          <Button color="inherit">
           <Badge badgeContent={2} color="secondary">
                <ShoppingCart/>
           </Badge>
          </Button>

        </Toolbar>
        
      </AppBar>
    </>
  );
}