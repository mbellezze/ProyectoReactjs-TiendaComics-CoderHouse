import React, {useState, useEffect} from 'react';
import { Item } from '../Item/Item';


const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve (
            <Item />
        ), 2000)
    })
}

export const ItemList = props => {
    const [data, setData] = useState([]);

    const mostrarItem = () => {
        myPromise().then(dataProductos => {
            setData(dataProductos)
        })
    }

    useEffect(() => {
        mostrarItem()
    }, [])
    
    return <>
        <Item data={data}/>
    </>
}
