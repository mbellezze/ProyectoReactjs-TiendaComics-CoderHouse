import React from 'react';
import { makeStyles } from '@material-ui/core';
import { navBarStyle } from './NavBarStyle';
import { CartWidget } from '../CartWidget/CartWidget';


const useStyles = makeStyles((theme) => navBarStyle(theme));

export const NavBar = ({img}) => {
    const classes = useStyles();
    return (
        <nav className={classes.containerNav}>
            <a href="#">Saurus</a>
            <div>
                <a href="#">Productos</a>
                <a href="#">Categorias</a>
            </div>
            <CartWidget img={img}/>
        </nav>
    );
}