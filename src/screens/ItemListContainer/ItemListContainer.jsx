import React from 'react';
import { ItemList } from '../ItemListContainer/ItemList/ItemList';
import { makeStyles } from '@material-ui/styles';
import { itemListContainerStyle } from './ItemListContainerStyle';

const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = props => {
    const classes = useStyles();
    return (
        <div className={classes.container}><ItemList/></div>
    );
}