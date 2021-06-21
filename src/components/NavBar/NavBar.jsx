import React from 'react';
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
import { CartWidget } from '../CartWidget/CartWidget';


const useStyles = makeStyles((theme) => navBarStyle(theme));

export const NavBar = ({img, alt}) => {
    const classes = useStyles();
    return (
        <nav className={classes.containerNav}>
            <a href="#"><img className={classes.logo} src="./img/logo.png" alt="imagen del logo"/></a>
            <div>
                <a href="#">Marvel</a>
                <a href="#">DC</a>
                <a href="#">Independientes</a>
            </div>
            <CartWidget img={img} alt={alt}/>
        </nav>
    );
}