import { FETCHINGREDIENTS } from '../actions';

export default function ingredientsReducer(state = [], action) {
  switch (action.type) {
    case FETCHINGREDIENTS:
      return action.payload;
    default:
      return state;
  }
}
