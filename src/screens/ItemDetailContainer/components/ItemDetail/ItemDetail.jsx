import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { itemDetailStyle } from '../ItemDetail/ItemDetailStyle';
import { ItemCount } from '../../../../components/ItemCount/ItemCount';
import { ConfirmarCompra } from '../../../../components/ConfirmarCompra/ConfirmarCompra';
import { CartContext } from '../../../../CartContext/CartContext';

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = props => {
    const classes = useStyles();
    const [agregarCart, setAgregarCart] = useState(false);
    const [cantidadComics, setCantidadComics] = useState(0);
    const {addItem, removeItem} = useContext(CartContext);

    const onAdd = cantidadCompra => {
        setCantidadComics(cantidadCompra);
        setAgregarCart(true);
        addItem({item: props, quantity: cantidadCompra});
    }

    const cancelarCart = () => {
        setAgregarCart(false);
        removeItem(props.id);
    }
    
    return <>
        <Grid xs={12} container justify="center" alignItems="center" direction="row" spacing={2} className="container">
            <Grid item xs={3}>
                <Card>
                    <CardMedia component="img" image={props.imagenUrl} alt={props.alt}/>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Typography component="h2" className={classes.titulo}>{props.title}</Typography>
                <Typography color="textSecondary" component="p">{props.description}</Typography>
                <Typography className={classes.precio}>${props.price}</Typography>
                { 
                    agregarCart ? <ConfirmarCompra cancelarCart={cancelarCart}/>
                    :
                    <ItemCount stock={props.stock} initial={1} cantidadComics={cantidadComics} onAdd={onAdd}/>
                }
            </Grid>
        </Grid>
    </>
}
