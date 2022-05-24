import {configureStore} from '@reduxjs/toolkit';
import CartData from './Reducer/CartData';
import CartDataLength from './Reducer/cartDataLength';

export const store = configureStore({
  reducer: {
    CartData: CartData,
    CartDataLength: CartDataLength,
    // themeChange: themeChange,
  },
});
