import React from 'react';
import { makeStyles } from '@material-ui/core';
import { itemListContainerStyle } from './ItemListContainerStyle';


const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = ({texto}) => {
    const classes = useStyles();
    return (
        <div className={classes.container} >{texto}</div>
    );
}