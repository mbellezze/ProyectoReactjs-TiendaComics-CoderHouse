import React from 'react';
import './App.css';
import { CommonComponent } from './components/ReutilizacionError/CommonComponent/CommonComponent';
import {NavBar} from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return ( <>
    <NavBar img='./img/carritoCompra.png' alt='imagen carrito de compras'/>
    <ItemDetailContainer />
    {/* <ItemListContainer /> */}
    {/* <CommonComponent titulo='Upps! Página incorrecta'
    img='./img/notFound.jpg'
    alt='imagen que muestra cuando ingreso a una página incorrecta'/> */}
    {/* <CommonComponent titulo='Carrito de compra vacio'
    img='./img/empty.jpg'
    alt='imagen que muestra cuando el carrito está vacío'/>  */} 
  </>);
}

export default App;
