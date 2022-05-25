import types from '../type';

const initial_state = {
  cartDataLength: {length: '0'},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case 'AddCart':
      const data = action.payload;
      console.log(11, data);
      return {cartDataLength: action.payload};
      break;
    case types.SubtractCart:
      return {cartDataLength: action.payload};
      break;
    default:
      return {...state};
  }
}
