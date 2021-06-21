import React from 'react';


export const CartWidget = ({img, alt}) => {
    return (
        <a href='#'><img src={img} alt={alt}/></a>
    );
}