import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';
import IngredientForm from './IngredientForm';

const useStyles = makeStyles({
  cardContent: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
});

function IngredientDisplay(props) {
  const classes = useStyles();
  const { ingredient } = props;

  return (
    <CardContent className={classes.cardContent}>
      <IngredientForm ingredient={ingredient} errors={undefined} />
    </CardContent>
  );
}

export default IngredientDisplay;

IngredientDisplay.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired,
    synonyms: PropTypes.arrayOf(PropTypes.string),
    unitOfMeasure: PropTypes.shape({
      notation: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};

IngredientDisplay.defaultProps = {
  ingredient: undefined,
};
