import axios from 'axios';
import {
  CLEARINGREDIENT,
  FETCHINGREDIENTS,
  GETINGREDIENT,
  INGREDIENTONCHANGE,
} from './types';

const URL = process.env.SERVER_URL;

export function fetchIngredients() {
  return async dispatch => {
    const response = await axios.get(`${URL}/api/ingredients`);
    dispatch({
      type: FETCHINGREDIENTS,
      payload: response.data,
    });
  };
}

export const getIngredient = id => {
  return async dispatch => {
    const response = await axios.get(`${URL}/api/ingredients/${id}`);
    dispatch({
      type: GETINGREDIENT,
      payload: response.data,
    });
  };
};

export const ingredientOnChange = ingredient => {
  // console.log('action ingredient: ', ingredient);
  return {
    type: INGREDIENTONCHANGE,
    payload: ingredient,
  };
};

export const clearIngredient = () => ({ type: CLEARINGREDIENT });
