import {applyMiddleware, combineReducers, createStore} from 'redux';
import types from '../type';
import auth from './auth';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

const persistConfig1 = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: 'userData',
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig1, auth),
  // savePosts: persistReducer(persistConfig2, savedata),
  // themeChange,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
