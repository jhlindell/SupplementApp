import {
  CLEARINGREDIENT,
  GETINGREDIENT,
  INGREDIENTONCHANGE,
} from '../actions';

const initialState = {
  synonyms: [],
  identifier: 0,
  name: '',
  unitOfMeasure: {
    name: '',
    notation: '',
  },
};

export default function ingredientReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case GETINGREDIENT:
      return action.payload;
    // case ActionTypes.deleteTodo:
    // return state.filter((todo: Todo) => todo.id !== action.payload);
    case INGREDIENTONCHANGE:
      return action.payload;
    case CLEARINGREDIENT:
      return initialState;
    default:
      return state;
  }
}
