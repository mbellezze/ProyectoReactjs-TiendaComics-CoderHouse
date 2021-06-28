import React from 'react';

export const ItemDetail = props => {
    /* const classes = useStyles(); */

    return <>
            <div>
                <img src={props.imagenUrl} alt={props.alt}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p /* className={classes.precio} */>${props.price}</p>
            </div>
    </>
}
