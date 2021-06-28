import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ItemDetail } from '../ItemDetailContainer/components/ItemDetail/ItemDetail';
import { itemDetailContainerStyle } from './ItemDetailContainerStyle';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 1, comic: 'Marvel', title: 'The Incredible Hulk', description: 'Versión de Jason Aaron, Marc Silvestri, Sunny Gho',
                    price: 300, stock: 10, imagenUrl: '../img/Marvel/marvelHulk.jpg', alt: 'Portada del comic del increible Hulk',
                },
                {
                    id: 2, comic: 'Marvel', title: 'The Invencible Iron Man', description: 'Versión de John Romita', price: 350,
                    stock: 8, imagenUrl: '../img/Marvel/marvelIronMan.jpg', alt: 'Portada del comic del invencible Iron Man',
                },
                {
                    id: 3, comic: 'Marvel', title: 'The Amazing Spider Man', description: 'Versión de Todd McFarlane', price: 300,
                    stock: 15, imagenUrl: '../img/Marvel/marvelSpiderMan.jpg', alt: 'Portada del comic del asombroso Spider Man',
                },
                {
                    id: 4, comic: 'Marvel', title: 'Captain America', description: 'Versión de Jack Kirby y Joe Simon', price: 450,
                    stock: 20, imagenUrl: '../img/Marvel/marvelCapitanAmerica.jpg', alt: 'Portada del comic del Capitan America',
                },
                {
                    id: 5, comic: 'DC', title: 'Batman', description: 'Versión de Brian Michael Bendis y Christopher Priest',
                    price: 350, stock: 10, imagenUrl: '../img/DC/dcBatman.jpg', alt: 'Portada del comic de Batman',
                },
                {
                    id: 6, comic: 'DC', title: 'The Flash', description: 'Version de Baron, Guice y Mahlstedt',
                    price: 300, stock: 15, imagenUrl: '../img/DC/dcFlash.jpg', alt: 'Portada del comic de Flash',
                },
                {
                    id: 7, comic: 'DC', title: 'La Mujer Maravilla', description: 'Version de Chris Sheehan.',
                    price: 300, stock: 11, imagenUrl: '../img/DC/dcMujerMaravilla.jpg', alt: 'Portada del comic de la Mujer Maravilla',
                },
                {
                    id: 8, comic: 'DC', title: 'Superman', description: 'Version de René Pérez',
                    price: 400, stock: 7, imagenUrl: '../img/DC/dcSuperman.jpg', alt: 'Portada del comic de Superman',
                },
                {
                    id: 9, comic: 'Independiente', title: 'HellBoy', description: 'Version de Mike Mignola',
                    price: 400, stock: 10, imagenUrl: '../img/Independiente/indepHellBoy.jpg', alt: 'Portada del comic de HellBoy',
                },
                {
                    id: 10, comic: 'Independiente', title: 'Kick-Ass', description: 'Version de Mark Millar y John Romita Jr.',
                    price: 250, stock: 15, imagenUrl: '../img/Independiente/indepKickAss.jpg', alt: 'Portada del comic de Kick Ass',
                },
                {
                    id: 11, comic: 'Independiente', title: 'The Walking Dead', description: 'Version de Robert Kirkman y Tony Moore',
                    price: 450, stock: 5, imagenUrl: '../img/Independiente/indepTWD.jpg', alt: 'Portada del comic de The Walking Dead',
                },
            ]
        ), 2000)
    })
}

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [detalle, setDetalle] = useState([]);
    const {id} = useParams();
    

    useEffect(() => {
        getItems().then(dataProductos => id === undefined ?
            setDetalle(dataProductos)
            :
            setDetalle(dataProductos.filter(element => element.id === parseInt(id)))
        )
    }, [id]);
    
    return <>
        { detalle.length === 0 ? (<div className={classes.linearPro}><LinearProgress/></div>) : 
        (<div className={classes.container}>
            {detalle.map((element, i) => <ItemDetail key={i} {...element}/>)}
        </div>)
        }
    </>
}