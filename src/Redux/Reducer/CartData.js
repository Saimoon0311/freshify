import types from '../type';

const initial_state = {
  cartData: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.CreateCart:
      console.log(83438483, action.payload);
      const data = action.payload;
      return {cartData: data};
      break;
    case types.DeleteCart:
      return {cartData: {}};
      break;
    default:
      return {...state};
  }
}
