import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { cartStyle } from './CartStyle';

const useStyles = makeStyles((theme) => cartStyle(theme));

export const Cart = () => {
    const classes = useStyles();

    return<>
    console.log(hola)
        <div className={classes.titulo}>Página en construcción</div>
    </>
}