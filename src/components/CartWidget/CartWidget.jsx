import React, { useContext } from 'react';
import { Badge, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { CartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { cartWidgetStyle } from './CartWidgetStyle';

const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -2,
      backgroundColor: 'orange',
      color: 'black',
      position: 'absolute'
    },
  }))(Badge);

export const CartWidget = ({img, alt}) => {
    const {itemsQuantity} = useContext(CartContext);
    const classes = useStyles();

    return <>
        <Link to="/cart">
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={itemsQuantity}>
                    <img className={classes.imagen} src={img} alt={alt}/>
                </StyledBadge>
            </IconButton>
        </Link>
    </>
}