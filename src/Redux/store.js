import {configureStore} from '@reduxjs/toolkit';
import CartData from './Reducer/CartData';
import cartDataLength from './Reducer/cartDataLength';

export const store = configureStore({
  reducer: {
    CartData: CartData,
    cartDataLength: cartDataLength,
    // themeChange: themeChange,
  },
});
