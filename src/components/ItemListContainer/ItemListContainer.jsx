import React from 'react';
import { makeStyles } from '@material-ui/core';
import { itemListContainerStyle } from './ItemListContainerStyle';
import { ItemList } from '../ItemList/ItemList';


const useStyles = makeStyles((theme) => itemListContainerStyle(theme));

export const ItemListContainer = ({texto}) => {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            {/* {texto} */}
            <ItemList />
        </div>
    );
}