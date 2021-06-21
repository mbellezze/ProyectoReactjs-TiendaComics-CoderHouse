import React from 'react';
import { makeStyles } from '@material-ui/core';
import { itemStyle } from './ItemStyle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { ItemCount } from '../ItemCount/ItemCount';

const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = ({id, title, description, price, stock, imagenUrl, alt}) => {
    const classes = useStyles();

    return <>
        <Card className={classes.cardPadre}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    alt={alt}
                    image={imagenUrl}
                />
                <CardContent>
                    <Typography component="h2" className={classes.titulo}>{title}</Typography>
                    <Typography color="textSecondary" component="p">{description}</Typography>
                    <Typography className={classes.precio}>${price}</Typography>
                    <Typography variant="h6" component="p">ID: {id}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.contador}>
                <ItemCount stock={stock} initial={1} etiquetaBoton='Agregar al carrito'/>
            </CardActions>
        </Card>
    </>
}
