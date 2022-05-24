import types from '../type';

const initial_state = {
  cartData: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.CreateCart:
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
