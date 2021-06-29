import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';

const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = props => {
    const classes = useStyles();
    const [count, setCount] = useState(props.initial);

    
    return  <div className={classes.container}>
                <h5>Cantidad disponilbe: {props.stock-count} unidades</h5>
                <div>
                    <Button onClick={e => {setCount(count-1)}} disabled={count === props.initial ? true : false}>-</Button>
                    <h4>{count}</h4>
                    <Button onClick={e => {setCount(count+1)}} disabled={count < props.stock ? false : true}>+</Button>
                </div>
                <Button onClick={() => props.onAdd(count)}>Agregar al carrito</Button>
            </div>
}