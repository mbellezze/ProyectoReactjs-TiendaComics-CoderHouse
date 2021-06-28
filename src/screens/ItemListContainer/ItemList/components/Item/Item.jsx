import React from 'react';
import { makeStyles } from '@material-ui/core';
import { itemStyle } from './ItemStyle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { ItemCount } from '../../../../../components/ItemCount/ItemCount';
import { Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = props => {
    const classes = useStyles();

    return <>
        <Card className={classes.cardPadre}>
            <CardActionArea>
            <Link to={`/item/${props.id}`}>
                <CardMedia component='img' alt={props.alt} image={props.imagenUrl}/> 
            </Link>
                <CardContent>
                    <Typography component="h2" className={classes.titulo}>{props.title}</Typography>
                    <Typography color="textSecondary" component="p">{props.description}</Typography>
                    <Typography className={classes.precio}>${props.price}</Typography>
                    <Typography variant="h6" component="p">ID: {props.id}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.contador}>
                <ItemCount stock={props.stock} initial={1} etiquetaBoton='Agregar al carrito'/>
            </CardActions>
        </Card>
    </>
}
