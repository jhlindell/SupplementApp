import { combineReducers } from 'redux';
import ingredientsReducer from '../components/Ingredients/reducers/ingredients';
import ingredientReducer from '../components/Ingredients/reducers/ingredient';

const reducers = combineReducers({
  ingredients: ingredientsReducer,
  ingredient: ingredientReducer,
});

export default reducers;
