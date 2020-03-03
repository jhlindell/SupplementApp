import axios from 'axios';
import { navigate } from '@reach/router';
import {
  CLEARSUPPLEMENT,
  FETCHSUPPLEMENTS,
  GETSUPPLEMENT,
  SUPPLEMENTONCHANGE,
} from './types';

const URL = process.env.SERVER_URL;

export function fetchSupplements() {
  return async dispatch => {
    const response = await axios.get(`${URL}/api/supplements`);
    dispatch({
      type: FETCHSUPPLEMENTS,
      payload: response.data,
    });
  };
}

export const getSupplement = id => {
  return async dispatch => {
    const response = await axios.get(`${URL}/api/supplements/${id}`);
    dispatch({
      type: GETSUPPLEMENT,
      payload: response.data,
    });
  };
};

export const supplementOnChange = supplement => {
  return {
    type: SUPPLEMENTONCHANGE,
    payload: supplement,
  };
};

export const deleteSupplement = id => {
  return async () => {
    const response = await axios.delete(
      `${URL}/api/supplements/${id}`,
    );
    if (response.status === 204) {
      navigate('/supplements');
    } else {
      // eslint-disable-next-line no-console
      console.log('error deleting');
    }
  };
};

export const clearIngredient = () => ({ type: CLEARSUPPLEMENT });
