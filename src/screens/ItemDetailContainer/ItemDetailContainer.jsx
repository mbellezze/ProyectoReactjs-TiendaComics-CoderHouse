import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { ItemDetail } from '../ItemDetailContainer/components/ItemDetail/ItemDetail';
import { itemDetailContainerStyle } from './ItemDetailContainerStyle';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/Firebase';

const useStyles = makeStyles((theme) => itemDetailContainerStyle(theme));

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [detalle, setDetalle] = useState([]);
    const { productId } = useParams();
    

    useEffect(() => {
        const itemCollection = dataBase.collection("items");
        const item = itemCollection.doc(productId);

        item.get().then((doc) => {
            setDetalle([{id: doc.id, ...doc.data()}]);
        })
        /* getItems().then(dataProductos => id === undefined ?
            setDetalle(dataProductos)
            :
            setDetalle(dataProductos.filter(element => element.id === parseInt(id)))
        ) */
    }, []);
    
    return <>
        { detalle.length === 0 ? (<div className={classes.linearPro}><LinearProgress/></div>) : 
        (<div className={classes.container}>
            {detalle.map((element, i) => <ItemDetail key={i} {...element}/>)}
        </div>)
        }
    </>
}