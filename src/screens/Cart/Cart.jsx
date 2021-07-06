import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { CartTable } from './components/CartTable/CartTable';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { cartStyle } from './CartStyle';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyle = makeStyles((theme) => cartStyle(theme));

export const Cart = () => {
    const classes = useStyle();
    const history = useHistory();
    const {itemsCart} = useContext(CartContext);

    return<>
    {
        itemsCart.length === 0 ?
        <div className={classes.container}>
            <Typography className={classes.text} variant="h3">El carrito está vacío.</Typography> 
            <div className={classes.buttonContainer}>
                <Link className={classes.buttons} onClick={() => history.push(`/`)}>Volver a la tienda</Link>
            </div>
        </div>
        :
        <CartTable />
    }</>
}