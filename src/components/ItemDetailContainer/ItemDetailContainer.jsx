import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { itemDetailContainerStyle } from './ItemDetailContainerStyle';

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 10,
                    title: 'The Incredible Hulk',
                    description: 'Version de Jason Aaron, Marc Silvestri, Sunny Gho',
                    price: 300,
                    stock: 10,
                    imagenUrl: './img/Marvel/marvelHulk.jpg',
                    alt: 'Portada del comic del increible Hulk',
                }
            ]
        ), 2000)
    })
}

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [detalle, setDetalle] = useState([]);

    const mostrarItemDetail = () => {
        getItems().then(dataProductos => {
            setDetalle(dataProductos)
        })
    }

    useEffect(() => {
        mostrarItemDetail()
    }, [])
    
    return <>
        { detalle.length === 0 ? (<div className={classes.linearPro}><LinearProgress/></div>) : 
        (<div className={classes.container}>
            {detalle.map((element) => <ItemDetail key={element.id}
            title={element.title}
            description={element.description}
            price={element.price}
            imagenUrl={element.imagenUrl}
            alt={element.alt}
            />)}
        </div>)
        }
    </>
}