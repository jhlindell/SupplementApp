import axios from 'axios';
import { navigate } from '@reach/router';
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
  return {
    type: INGREDIENTONCHANGE,
    payload: ingredient,
  };
};

export const deleteIngredient = id => {
  return async () => {
    const response = await axios.delete(
      `${URL}/api/ingredients/${id}`,
    );
    if (response.status === 204) {
      navigate('/ingredients');
    } else {
      // eslint-disable-next-line no-console
      console.log('error deleting');
    }
  };
};

export const clearIngredient = () => ({ type: CLEARINGREDIENT });
