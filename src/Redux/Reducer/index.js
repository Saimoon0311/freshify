import {applyMiddleware, combineReducers, createStore} from 'redux';
import types from '../type';
import auth from './auth';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import CartData from './CartData';
import CartDataLength from './cartDataLength';

const persistConfig1 = {
  key: 'CartData',
  storage: AsyncStorage,
  whitelist: 'cartData',
};

const rootReducer = combineReducers({
  cartData: persistReducer(persistConfig1, CartData),
  cartDataLength: CartDataLength,
  // themeChange,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
