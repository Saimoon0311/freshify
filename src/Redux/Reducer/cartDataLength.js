import types from '../type';

const initial_state = {
  cartDataLength: 0,
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.AddCart:
      const data = action.payload;
      return {cartData: data};
      break;
    case types.SubtractCart:
      return {cartData: {}};
      break;
    default:
      return {...state};
  }
}
