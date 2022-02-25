import {configureStore} from '@reduxjs/toolkit';
import auth from './Reducer/auth';

export const store = configureStore({
  reducer: {
    auth: auth,
    // savedata: savedata,
    // themeChange: themeChange,
  },
});
