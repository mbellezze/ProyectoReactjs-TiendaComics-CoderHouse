import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../CartContext/CartContext';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { cartDoneMessageStyle } from './CartDoneMessageStyle';

const useStyle = makeStyles((theme) => cartDoneMessageStyle(theme));

export const CartDoneMessage = () => {
    const {orderId, clear} = useContext(CartContext)
    const history = useHistory();
    const classes = useStyle();


    const volverAlaTienda = () =>{
        clear()
        history.push(`/`);
    }

    return <div>
        <div className={classes.messageOrder}>
          <Typography variant="h3">¡Gracias por tu compra!</Typography>
          <img src="https://i.ibb.co/1TFqK54/Los-h-roes-de-Marvel-comienzan-su-nueva-etapa-Fresh-Start-en-SMASH-2-min.jpg" 
            alt="Imagen de agradecimiento por la compra" />
          <Typography>Con este código puedes seguir tu pedido: {orderId}</Typography>  
        </div>
        <div className={classes.container}>
            <Link className={classes.button} onClick={volverAlaTienda}>Volver a comprar</Link>
        </div>
    </div>
}