import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import types from '../Redux/type';
import {ApiGet} from './helperFunction';
import {allCartDataUrl} from './Url';

export const getCartData = () => {
  const {cartData} = useSelector(state => state.cartData);
  const dispatch = useDispatch();
  let url = allCartDataUrl + cartData.id;
  ApiGet(url).then(res => {
    if (res.success == true) {
      dispatch({
        type: types.AddCart,
        payload: res.data.items.length,
      });
    }
  });
};
