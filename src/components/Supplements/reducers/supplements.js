import { FETCHSUPPLEMENTS } from '../actions';

export default function ingredientsReducer(state = [], action) {
  switch (action.type) {
    case FETCHSUPPLEMENTS:
      return action.payload;
    default:
      return state;
  }
}
