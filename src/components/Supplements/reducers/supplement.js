import {
  CLEARSUPPLEMENT,
  GETSUPPLEMENT,
  SUPPLEMENTONCHANGE,
} from '../actions';

const initialState = {
  notes: [],
  identifier: 0,
  name: '',
  unitOfMeasure: {
    name: '',
    notation: '',
  },
  manufacturer: {
    identifier: '',
    name: '',
  },
  price: '',
  ingredients: [],
};

export default function ingredientReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case GETSUPPLEMENT:
      return action.payload;
    case SUPPLEMENTONCHANGE:
      return action.payload;
    case CLEARSUPPLEMENT:
      return initialState;
    default:
      return state;
  }
}
