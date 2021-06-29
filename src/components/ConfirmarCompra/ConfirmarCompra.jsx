import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { confirmarCompraStyle } from './ConfirmarCompraStyle';

const useStyles = makeStyles((theme) => confirmarCompraStyle(theme));

export const ConfirmarCompra = props => {
    const classes = useStyles();
    const history = useHistory();

    return <div className={classes.container}>
            <Link className={classes.link} onClick={() => history.push(`/cart`)}>Finalizar compra</Link>
            <Link className={classes.link} onClick={() => props.cancelarCart(false)}>Cancelar</Link>
        </div>
}