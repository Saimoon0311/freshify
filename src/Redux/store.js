import {configureStore} from '@reduxjs/toolkit';
import CartData from './Reducer/CartData';

export const store = configureStore({
  reducer: {
    CartData: CartData,
    // savedata: savedata,
    // themeChange: themeChange,
  },
});
