import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { itemCountStyle } from './ItemCountStyle';

const useStyles = makeStyles((theme) => itemCountStyle(theme));

export const ItemCount = ({stock, initial, etiquetaBoton}) => {
    const classes = useStyles();
    const [count, setCount] = useState(initial);

    
    return  <div className={classes.container}>
                <h5>Cantidad disponilbe: {stock-count} unidades</h5>
                <div>
                    <Button onClick={e => {setCount(count-1)}} disabled={count===0}>-</Button>
                    <h4>{count}</h4>
                    <Button onClick={e => {setCount(count+1)}} disabled={count===stock}>+</Button>
                </div>
                <Button>{etiquetaBoton}</Button>
            </div>
}