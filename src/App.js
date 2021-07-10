import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './CartContext/CartContext';
import { Cart } from './screens/Cart/Cart';

function App() {
  return <CartContextProvider>
    <BrowserRouter>
      <NavBar img='../img/carritoCompra.png' alt='imagen carrito de compras'/>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route exact path='/category/:comicID'>
          <ItemListContainer />
        </Route>
        <Route exact path='/item/:productId'>
          <ItemDetailContainer />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
      </BrowserRouter>
    </CartContextProvider>
}

export default App;
