import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { cartWidgetStyle } from './CartWidgetStyle';

const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = ({img, alt}) => {
    const classes = useStyles();
    return (
        <img className={classes.imagen}src={img} alt={alt}/>
    );
}