import React, { useState, useContext } from 'react';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { formularioDatosStyle } from './FormularioDatosStyle';
import { CartContext } from '../../../../CartContext/CartContext';
import { dataBase } from '../../../../Firebase/Firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';


const useStyle = makeStyles((theme) => formularioDatosStyle(theme));

export const FormularioDatos = props => {

    const {itemsCart, subTotal, updateOrderId} = useContext(CartContext)
    const classes = useStyle();
    const [buyerData, setBuyerData] = useState({});
    const [ , setOutOfStockArr] = useState([]);
    const [ , setError] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        setBuyerData({ ...buyerData, [name]: value });        
    }
    
    const submitForm = event => {
        event.preventDefault();
        addOrderUpdateItems(buyerData);
    }

    const itemsToUpdate = dataBase.collection("productos")
    .where(firebase.firestore.FieldPath.documentId(), 'in', itemsCart.map(i => i.item.id));

    const createOrder = (buyer) => {
        const newOrder = {
            buyer: buyer,
            items: itemsCart,
            date: new Date(),
            total: subTotal
        }
        return newOrder;
    }
  
    const addNewOrder = (buyer) => {
        const newOrder = createOrder(buyer);
        const orders = dataBase.collection("orders");
        try {
            orders.add(newOrder).then((doc) => {
            updateOrderId(doc.id);
        })
        } catch(error) {
            setError(true);
        }
    }

    const addOrderUpdateItems = (buyer) => {
        itemsToUpdate.get().then((querySnapshot) => {
        const batch = dataBase.batch();
        const outOfStock = [];
            querySnapshot.docs.forEach((docSnapshot, idx) => {
                if(docSnapshot.data().stock >= itemsCart[idx].quantity){
                    batch.update(docSnapshot.ref, {'stock': docSnapshot.data().stock - itemsCart[idx].quantity});
                } else {
                    outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
                }
            })

            if(outOfStock.length === 0){
                batch.commit().then(() => {
                    addNewOrder(buyer);      
                });
            } else {
                setOutOfStockArr(outOfStock);
            }
        })
    }

    return (
        <form onSubmit={submitForm} className={classes.root} noValidate autoComplete="off">
            <Typography className={classes.text} variant="h4">Datos para la compra</Typography> 
            <TextField className={classes.inputs}
                id="outlined-secondary"
                label="Nombre"
                variant="outlined"
                color="secondary"
                name="nombre"
                required onChange={handleChange}
            />
            <TextField className={classes.inputs}
                id="outlined-secondary"
                label="Apellido"
                variant="outlined"
                color="secondary"
                name="apellido"
                required onChange={handleChange}
            />
            <TextField className={classes.inputs}
                id="outlined-secondary"
                label="Celular"
                variant="outlined"
                color="secondary"
                name="celular"
                required onChange={handleChange}
            />
            <TextField className={classes.inputs}
                id="outlined-secondary"
                label="Email"
                variant="outlined"
                color="secondary"
                name="email"
                required onChange={handleChange}
            />
            <Grid className={classes.actionsContainer} container direction="row" alignItems="stretch">
                <Grid className={classes.totalContainer} item xs={6}>
                    <h5 className={classes.total}> Total a pagar: ${subTotal}</h5>
                </Grid>
                <Grid className={classes.submitContainer} item xs={6}>
                    <Button type='submit' className={classes.submmitButton}>
                        Finalizar pago
                    </Button>
                </Grid>
            </Grid>
    </form>
    )
}