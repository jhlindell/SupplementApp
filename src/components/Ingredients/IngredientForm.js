import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../commonComponents/TextField';
import IngredientSynonymForm from './IngredientSynonymForm';

const useStyles = makeStyles({
  field: {
    width: 400,
    paddingBottom: 20,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function IngredientForm(props) {
  const classes = useStyles();
  const { ingredient, onChange } = props;

  const nameOnChange = newValue => {
    const newIngredient = { ...ingredient, name: newValue };
    onChange(newIngredient);
  };

  const unitOfMeasureNameChange = newValue => {
    const newIngredient = {
      ...ingredient,
      unitOfMeasure: {
        name: newValue,
        notation: ingredient.unitOfMeasure.notation,
      },
    };
    onChange(newIngredient);
  };

  const unitOfMeasureNotationChange = newValue => {
    const newIngredient = {
      ...ingredient,
      unitOfMeasure: {
        name: ingredient.unitOfMeasure.name,
        notation: newValue,
      },
    };
    onChange(newIngredient);
  };

  return (
    <div className={classes.formContainer}>
      <div>{ingredient.identifier}</div>
      <TextField
        value={ingredient.name}
        error={undefined}
        label="Name"
        className={classes.field}
        onChange={nameOnChange}
      />
      <TextField
        value={ingredient.unitOfMeasure.name}
        error={undefined}
        label="Unit of Measure"
        className={classes.field}
        onChange={unitOfMeasureNameChange}
      />
      <TextField
        value={ingredient.unitOfMeasure.notation}
        error={undefined}
        label="Notation"
        className={classes.field}
        onChange={unitOfMeasureNotationChange}
      />
      <IngredientSynonymForm synonyms={undefined} />
    </div>
  );
}

export default IngredientForm;

IngredientForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired,
    unitOfMeasure: PropTypes.shape({
      notation: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};

IngredientForm.defaultProps = {
  ingredient: undefined,
};
