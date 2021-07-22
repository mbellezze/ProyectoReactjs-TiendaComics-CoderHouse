import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { CartContext } from '../../../../CartContext/CartContext';
import { cartTableStyle } from './CartTableStyle';
import { FinalizarCompra } from '../FinalizarCompra/FinalizarCompra';
import { dataBase } from '../../../../Firebase/Firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const useStyle = makeStyles((theme) => cartTableStyle(theme));

export const CartTable = () => {

    const {itemsCart, removeItem, subTotal} = useContext(CartContext);
    const classes = useStyle();
    const [outOfStock, setOutOfStock] = useState([]);
    const [orderId, setOrderId] = useState();
    const [outOfStockArr, setOutOfStockArr] = useState([]);

    /* const orders = dataBase.collection("orders"); */
    /* const batch = dataBase.batch(); */
    const itemsToUpdate = dataBase.collection("items")
      .where(firebase.firestore.FieldPath.documentId(), 'in', itemsCart.map(i => i.item.id));


    const createOrder = (buyer) => {
      const newItems = [];
      itemsCart.forEach(element => {
          const data = {
              id: element.item.id,
              title: element.item.title,
              price: element.item.price,
              quantity: element.quantity
          }
          newItems.push(data);
          console.log(newItems);
      });
      const newOrder = {
          buyer: buyer,
          items: newItems,
          date: new Date(),
          total: subTotal
      }
      console.log(newOrder);
      return newOrder;
  }
  
  
  const addNewOrder = (buyer) => {
    const newOrder = createOrder(buyer);
    const orders = dataBase.collection("orders");
    try {
          orders.add(newOrder).then((doc) => {
          setOrderId(doc.id);
      })
    } catch(error) {
      console.log("Firebase add doc error:", error);
  }
  }



  const addOrderUpdateItems = (buyer) => {
    
    itemsToUpdate.get().then((querySnapshot) => {
      const batch = dataBase.batch();
      const newBatch = batch; 
      const outOfStock = [];
        querySnapshot.docs.forEach((docSnapshot, idx) => {
            if(docSnapshot.data().stock >= itemsCart[idx].quantity){
                newBatch.update(docSnapshot.ref, {'stock': docSnapshot.data().stock - itemsCart[idx].quantity});
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
            }
        })

        if(outOfStock.length === 0){
            newBatch.commit().then(() => {
                addNewOrder(buyer);         
            });
        } else {
            setOutOfStockArr(outOfStock);
        }
    })
  }


    return <div className={classes.container}>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead className={classes.headerTable}>
          <TableRow>
            <TableCell align="center">Imagen</TableCell>
            <TableCell align="center">Producto</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsCart.map((item) => (
            <TableRow key={item.item.id}>
              <TableCell component="th" scope="row" align="center">
                  <img src={item.item.imagenUrl} alt={item.item.alt} className={classes.imgProducto}></img>
              </TableCell>
              <TableCell align="center">{item.item.title}</TableCell>
              <TableCell align="center">{item.quantity}</TableCell>
              <TableCell align="center">$ {item.item.price}</TableCell>
              <TableCell>
                    <IconButton aria-label="delete" className={classes.delete} onClick={() => removeItem(item.item.id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </TableCell>
            </TableRow>
          ))}
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell align="center">Total:</TableCell>
          <TableCell  align="center">$ {subTotal}</TableCell>
          <TableCell></TableCell>
        </TableBody>
      </Table>
    </TableContainer>
    <div className={classes.root}>
      {
        <FinalizarCompra precioTotal={subTotal} addOrder={addOrderUpdateItems}/>
      }
      {
        <>
          <h1>Compra realizada!</h1>
          <h2>Id de tu compra: {orderId}</h2>   
        </>
      }
    </div>    
</div>
}