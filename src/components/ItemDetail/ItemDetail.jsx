import React from 'react';
import { makeStyles } from '@material-ui/core';
import { itemDetailStyle } from './ItemDetailStyle';

const useStyles = makeStyles((theme) => itemDetailStyle(theme));

export const ItemDetail = ({title, description, price, imagenUrl, alt}) => {
    const classes = useStyles();

    return <>
            <div>
                <img src={imagenUrl} alt={alt} width="300" height="300"/>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className={classes.precio}>${price}</p>
            </div>
    </>
}
