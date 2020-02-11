import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '../commonComponents/TextField';

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

function IngredientSynonymForm(props) {
  const { synonyms } = props;
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <div>Synonyms:</div>
      {synonyms ? <div>{synonyms}</div> : <div>no synonyms</div>}
    </div>
  );
}

export default IngredientSynonymForm;

IngredientSynonymForm.propTypes = {
  synonyms: PropTypes.arrayOf(PropTypes.string),
};

IngredientSynonymForm.defaultProps = {
  synonyms: undefined,
};
