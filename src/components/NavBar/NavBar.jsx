import React, { useContext } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext/CartContext';


const useStyles = makeStyles((theme) => navBarStyle(theme));

export const NavBar = ({img, alt}) => {
    const {itemsCart} = useContext(CartContext);
    const classes = useStyles();
    const marvel = 'Marvel';
    const dc = 'DC';
    const indep = 'Independiente';

    return (<>
        <AppBar className={classes.containerNav}>
            <Toolbar className={classes.toolbar}>
                <Link to={'/'}><img className={classes.logo} src="../img/logo.png" alt="imagen del logo"/></Link>
                <Link to={`/category/${marvel}`} className={classes.links}>Marvel</Link>
                <Link to={`/category/${dc}`} className={classes.links}>DC</Link>
                <Link to={`/category/${indep}`} className={classes.link}>Independiente</Link>
                {itemsCart.length > 0 ? <CartWidget img={img} alt={alt}/> : ''}
            </Toolbar>
        </AppBar>
    </>);
}