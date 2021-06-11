import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';

const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = props => {
    const classes = useStyles();
    const [initial, setInitial] = useState(1);
    const stock = 10;

    const handleChange = () => {
        if (initial < stock) {
            setInitial(initial+1);
        }
    }

    const handleChange2 = () => {
        if (initial > 0) {
            setInitial(initial-1);
        }
    }

    return <div className={classes.container}>
        <Button onClick={e => handleChange()}>+</Button>
        <h4>{initial}</h4>
        <Button onClick={e => handleChange2()}>-</Button>
        <Button>Agregar al carrito</Button>
    </div>
}