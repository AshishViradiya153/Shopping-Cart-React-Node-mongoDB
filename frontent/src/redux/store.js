

import reducer from './slice/productSlice'
import cartReducer from './slice/cartSlice';
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'

// const { getProductSlice, getProductDetailsSlice } = reducer;

// const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const INITIAL_STATE = {
    cart: {
        cartItems: cartItemsInLocalStorage,
    },
};


const store = configureStore({
    reducer: {
        cart: cartReducer,
        reducer
    },
    INITIAL_STATE,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false, })


})

export default store;