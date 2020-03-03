import { combineReducers } from 'redux';
import ingredientsReducer from '../components/Ingredients/reducers/ingredients';
import ingredientReducer from '../components/Ingredients/reducers/ingredient';
import supplementsReducer from '../components/Supplements/reducers/supplements';

const reducers = combineReducers({
  ingredients: ingredientsReducer,
  ingredient: ingredientReducer,
  supplements: supplementsReducer,
});

export default reducers;
