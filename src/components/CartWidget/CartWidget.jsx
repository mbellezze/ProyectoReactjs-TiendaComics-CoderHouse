import React from 'react';
import { makeStyles } from '@material-ui/core';
import { cartWidgetStyle } from './CartWidgetStyle';


const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = ({img}) => {
    const classes = useStyles();
    return (
        <a className={classes.img} >
            <img src={img}/>
        </a>
    );
}