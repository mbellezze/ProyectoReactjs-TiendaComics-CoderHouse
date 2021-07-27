import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

export const CartContextProvider = props => {
    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [itemsCart, setItemsCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0); 
    const [orderId, setOrderId] = useState('')  


    const IsInCart = idItem => {
        itemsCart.find(itemCart => itemCart.item.id === idItem);
    }


    const addItem = itemAgregado => {
        setSubTotal(subTotal + (itemAgregado.item.price * itemAgregado.quantity))
        setItemsQuantity(itemsQuantity + itemAgregado.quantity);
        if (IsInCart(itemAgregado.item.id)) {
            const actualizarItem = itemsCart.map((itemCart) => {
                const cantidadTotal = itemCart.quantity + itemAgregado.quantity;
                if (itemCart.item.id === itemAgregado.item.id) {
                    return {...itemCart, quantity: cantidadTotal};
                }
                return {itemCart};
            });
            setItemsCart(actualizarItem);
        } else {
            setItemsCart(itemsAgregados => [...itemsAgregados, itemAgregado]);
        }
    }


    const clear = () => {
        setItemsCart([]);
        setItemsQuantity(0);
        setSubTotal(0);
        setOrderId('');
    }


    const removeItem = id => {
        const selectRemoveItem = itemsCart.find(itemCart => itemCart.item.id === id);
        setItemsQuantity(itemsQuantity - selectRemoveItem.quantity);
        setItemsCart(itemsCart.filter((item) => item.item.id !== id));
        setSubTotal(subTotal - (selectRemoveItem.item.price * selectRemoveItem.quantity));
    }


    const updateOrderId = id =>{
        setOrderId(id)
    }

    useEffect(() => {
        console.log('Carrito Actualizado:', itemsCart);
    }, [itemsCart]);


    return <CartContext.Provider 
            value={{itemsCart, addItem, clear, removeItem, updateOrderId, orderId, itemsQuantity, subTotal}}>
            {props.children}
        </CartContext.Provider>
}