import React, { useContext } from 'react';
import { Badge, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { CartContext } from '../../CartContext/CartContext';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -2,
      backgroundColor: 'orange',
      color: 'black'
    },
  }))(Badge);

export const CartWidget = ({img, alt}) => {
    const {itemsQuantity} = useContext(CartContext);

    return <>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={itemsQuantity}>
                <img src={img} alt={alt}/>
            </StyledBadge>
        </IconButton>
    </>
}