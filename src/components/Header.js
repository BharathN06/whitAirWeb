import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, List, ListItem } from '@material-ui/core';
import '../scss/header.scss';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));



const Header = () => {
    const classes = useStyles();
    return (
        <div>
          <Grid className="main_header">
            <AppBar position="static" className="header">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Grid className="pull-left">
                 <List>
                   <ListItem>
                     <Link>Home</Link>
                   </ListItem>
                   <ListItem>
                     <Link>Products</Link>
                   </ListItem>
                   <ListItem>
                     <Link>Why choose us</Link>
                   </ListItem>
                 </List>
                </Grid>
                <Typography variant="h4" className={classes.title}>
                    White Air
                </Typography>
                <Grid className="pull-right">
                <List>
                   <ListItem>
                     <Link>How we work</Link>
                   </ListItem>
                   <ListItem>
                     <Link>Our technologies</Link>
                   </ListItem>
                   <ListItem>
                     <Link>Help</Link>
                   </ListItem>
                 </List>
                </Grid>
                {/* <Typography variant="h6" className={classes.title}>
                    News
                </Typography> */}
                {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
             </AppBar>
            </Grid>
        </div>
    );
};


export default Header;