import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Item } from '../Item/Item';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { itemListStyle } from './ItemListStyle'

const useStyles = makeStyles((theme) => itemListStyle(theme));

const myPromise = () => {
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
                },
                {
                    id: 20,
                    title: 'The Invencible Iron Man',
                    description: 'Version de John Romita',
                    price: 350,
                    stock: 8,
                    imagenUrl: './img/Marvel/marvelIronMan.jpg',
                    alt: 'Portada del comic del invencible Iron Man',
                },
                {
                    id: 30,
                    title: 'The Amazing Spider Man',
                    description: 'Version de Todd McFarlane',
                    price: 300,
                    stock: 15,
                    imagenUrl: './img/Marvel/marvelSpiderMan.jpg',
                    alt: 'Portada del comic del asombroso Spider Man',
                },
                {
                    id: 40,
                    title: 'DeadPool Kills The Marvel Universe',
                    description: 'Version de Bunn, Talajic, Loughridge',
                    price: 400,
                    stock: 5,
                    imagenUrl: './img/Marvel/marvelDeadPool.jpg',
                    alt: 'Portada del comic de Dead Pool',
                },
                {
                    id: 50,
                    title: 'Captain America',
                    description: 'Version de Jack Kirby y Joe Simon',
                    price: 450,
                    stock: 20,
                    imagenUrl: './img/Marvel/marvelCapitanAmerica.jpg',
                    alt: 'Portada del comic del Capitan America',
                },
                {
                    id: 60,
                    title: 'The Fantastic Four',
                    description: 'Version de Jack Kirby, Stan Lee, Stan Goldberg',
                    price: 300,
                    stock: 13,
                    imagenUrl: './img/Marvel/marvel4fantasticos.jpg',
                    alt: 'Portada del comic de los cuatro fantasticos',
                },
            ]
        ), 2000)
    })
}

export const ItemList = () => {
    const classes = useStyles();
    const [baseComics, setBaseComics] = useState([]);

    const mostrarItemList = () => {
        myPromise().then(dataProductos => {
            setBaseComics(dataProductos)
        })
    }

    useEffect(() => {
        mostrarItemList()
    }, [])
    
    return <>
        { baseComics.length === 0 ? (<div className={classes.linearPro}><LinearProgress/></div>) : 
        (<Grid container>
            <Grid item xs={12}>
                <Grid container justify="center">
                    {baseComics.map((element) => <Item key={element.id}
                    id={element.id}
                    title={element.title}
                    description={element.description}
                    price={element.price}
                    stock={element.stock}
                    imagenUrl={element.imagenUrl}
                    alt={element.alt}
                    />)}
                </Grid>
            </Grid>
        </Grid>)
        }
    </>
}
