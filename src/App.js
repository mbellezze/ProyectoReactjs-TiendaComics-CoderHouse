import React from 'react';
import './App.css';
import { CommonComponent } from './components/ReutilizacionError/CommonComponent/CommonComponent';
import {NavBar} from './components/NavBar/NavBar';
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return ( <>
    <NavBar img='./img/carritoCompra.png'/>
    <ItemListContainer texto='Titulo provisional para reemplazar luego'/>
    {/* <CommonComponent titulo='Upps! Página incorrecta'
    img='./img/notFound.jpg'
    alt='imagen que muestra cuando ingreso a una página incorrecta'/> */}
    {/* <CommonComponent titulo='Carrito de compra vacio'
    img='./img/empty.jpg'
    alt='imagen que muestra cuando el carrito está vacío'/>  */} 
  </>);
}

export default App;
