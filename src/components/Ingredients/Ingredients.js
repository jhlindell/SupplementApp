import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';
import { fetchIngredients } from './actions';

const useStyles = makeStyles({
  root: {},
});

function Ingredients() {
  const ingredients = useSelector(state => state.ingredients);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderIngredients() {
    if (ingredients.length) {
      return (
        <div>
          {ingredients.map(ingredient => {
            const link = `/ingredients/${ingredient.identifier}`;
            return (
              <div key={ingredient.name}>
                <Link to={link}>{ingredient.name}</Link>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return <div className={classes.root}>{renderIngredients()}</div>;
}

export default Ingredients;
