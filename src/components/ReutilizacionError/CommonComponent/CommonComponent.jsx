import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { commonComponentStyle } from './CommonComponentStyle';

const useStyles = makeStyles((theme) => commonComponentStyle(theme));

export const CommonComponent = ({ titulo, img, alt, etiquetaBoton = 'Volver al inicio' }) => {
    const classes = useStyles();
    return  <div className={classes.container}>
                <div>
                    <h1>{titulo}</h1>
                    <img src={img} alt={alt} />
                </div>
                <Button>{etiquetaBoton}</Button>   
            </div>
}