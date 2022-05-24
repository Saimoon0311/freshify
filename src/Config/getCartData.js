import React from 'react';
import {store} from '../Redux/Reducer';
import types from '../Redux/type';
import {ApiGet} from './helperFunction';
import {allCartDataUrl} from './Url';

export default function getCartData() {
  let cartData = store.getState().cartData.cartData;
  let cartDataLength = store.getState().cartDataLength.cartDataLength;
  let url = allCartDataUrl + cartData.id;
  ApiGet(url).then(res => {
    if (res.success == true) {
      store.dispatch({
        type: 'AddCart',
        payload: {length: res.data.items.length},
      });
      console.log(75678587, cartDataLength);
    }
  });
}
