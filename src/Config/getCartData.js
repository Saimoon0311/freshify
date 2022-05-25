import React from 'react';
import {store} from '../Redux/Reducer';
import types from '../Redux/type';
import {ApiGet} from './helperFunction';
import {allCartDataUrl} from './Url';

export default function getCartData() {
  let cartData = store.getState().cartData.cartData;
  let cartDataLength = store.getState().cartDataLength.cartDataLength;
  let id = cartData.id ? cartData.id : 'a';
  let url = allCartDataUrl + id;
  ApiGet(url).then(res => {
    if (res.success == true) {
      store.dispatch({
        type: 'AddCart',
        payload: {length: res.data.items.length},
      });
    } else if (res.data == 'Not Found') {
      store.dispatch({
        type: 'SubtractCart',
        payload: {length: 0},
      });
    }
  });
}
