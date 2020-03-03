import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import { navigate } from '@reach/router';
import {
  getIngredient,
  ingredientOnChange,
  deleteIngredient,
  // clearIngredient,
} from './actions';
import IngredientForm from './IngredientForm';

const useStyles = makeStyles({
  ingredientRoot: {
    display: 'flex',
    height: '92vh',
  },
  ingredientCard: {
    display: 'flex',
    margin: '20px auto auto auto',
    width: '70%',
    flexDirection: 'column',
  },
  cardHeader: {
    backgroundColor: 'lightgray',
  },
  cardContent: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  deleteButton: {
    backgroundColor: red[500],
  },
});

function IngredientBase(props) {
  const ingredient = useSelector(state => state.ingredient);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = props;

  useEffect(() => {
    if (id) {
      dispatch(getIngredient(id));
    }
  }, [dispatch, id]);

  function handleCancelClick() {
    navigate('/ingredients');
  }

  function handleDeleteClick() {
    dispatch(deleteIngredient(id));
  }

  function handleOnChange(newIngredient) {
    dispatch(ingredientOnChange(newIngredient));
  }

  return (
    <div className={classes.ingredientRoot}>
      <Card className={classes.ingredientCard}>
        <CardHeader
          className={classes.cardHeader}
          title={ingredient.name}
        />
        {ingredient && ingredient.name ? (
          <CardContent className={classes.cardContent}>
            <IngredientForm
              ingredient={ingredient}
              onChange={handleOnChange}
              errors={undefined}
            />
          </CardContent>
        ) : (
          <div>loading...</div>
        )}
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCancelClick}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleDeleteClick}
            classes={{
              root: classes.deleteButton,
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default IngredientBase;

IngredientBase.propTypes = {
  id: PropTypes.string,
};

IngredientBase.defaultProps = {
  id: undefined,
};
