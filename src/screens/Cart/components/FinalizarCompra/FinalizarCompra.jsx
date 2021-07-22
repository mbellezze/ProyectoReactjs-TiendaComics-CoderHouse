import React, { useState, useContext } from 'react';
import { TextField, Typography, Button, Grid } from '@material-ui/core';
import { finalizarCompraStyle } from './FinalizarCompraStyle';
import { makeStyles } from '@material-ui/core/styles';
import { CartContext } from '../../../../CartContext/CartContext';

const useStyle = makeStyles((theme) => finalizarCompraStyle(theme));

class Buyer {
    constructor(nombre, apellido, celular, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.celular = celular;
        this.email = email;
    }
}

const initialForm = new Buyer('', '', '', ''); 


export const FinalizarCompra = props => {

    const classes = useStyle();
    const [buyerFormData, setBuyerFormData] = useState(initialForm);
    const {subTotal} = useContext(CartContext);


    const handleChange = event => {
        const { name, value } = event.target;
        setBuyerFormData({ ...buyerFormData, [name]: value });        
    }
    

    const submitForm = event => {
        event.preventDefault();
        props.addOrder(buyerFormData);
    }

    return (
        <form onSubmit={submitForm} className={classes.root} noValidate autoComplete="off">
            <Typography className={classes.text} variant="h4">Formulario de registro</Typography> 
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
                    <div className={classes.total}> Total: ${subTotal}</div>
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
