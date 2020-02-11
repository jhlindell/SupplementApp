import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '../commonComponents/TextField';

const useStyles = makeStyles({
  field: {
    width: 350,
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

function IngredientSynonymForm(props) {
  const { ingredient, synonyms, onChange } = props;
  const classes = useStyles();

  const synonymOnChange = (newValue, index) => {
    const newSynonyms = [...synonyms];
    newSynonyms[index] = newValue;
    const newIngredient = { ...ingredient };
    newIngredient.synonyms = newSynonyms;
    onChange(newIngredient);
  };

  const addSynonym = () => {
    const newIngredient = { ...ingredient };
    const newSynonyms = [...synonyms];
    const blankSynonym = '';
    newSynonyms.push(blankSynonym);
    newIngredient.synonyms = newSynonyms;
    onChange(newIngredient);
  };

  const deleteSynonym = index => {
    const newSynonyms = [...synonyms];
    const newIngredient = { ...ingredient };
    newSynonyms.splice(index, 1);
    newIngredient.synonyms = newSynonyms;
    onChange(newIngredient);
  };

  return (
    <div className={classes.formContainer}>
      <div>Synonyms:</div>
      {synonyms ? (
        <div>
          <div>
            {synonyms.map((synonym, index) => {
              return (
                <div>
                  <TextField
                    key={synonym}
                    value={synonym}
                    error={undefined}
                    label={undefined}
                    className={classes.field}
                    onChange={event => synonymOnChange(event, index)}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => deleteSynonym(index)}
                  >
                    -
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={addSynonym}
            >
              Add Synonym
            </Button>
          </div>
        </div>
      ) : (
        <div>no synonyms</div>
      )}
    </div>
  );
}

export default IngredientSynonymForm;

IngredientSynonymForm.propTypes = {
  synonyms: PropTypes.arrayOf(PropTypes.string),
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired,
    synonyms: PropTypes.arrayOf(PropTypes.string),
    unitOfMeasure: PropTypes.shape({
      notation: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

IngredientSynonymForm.defaultProps = {
  synonyms: undefined,
  ingredient: undefined,
};
