import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    '&:hover': {
      boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
    },
  },
});

function SupplementListItem(props) {
  const { supplement } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={classes.card}>
        <CardContent>{supplement.name}</CardContent>
      </Card>
    </Grid>
  );
}

export default SupplementListItem;

SupplementListItem.propTypes = {
  supplement: PropTypes.shape({
    name: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired,
    notes: PropTypes.arrayOf(PropTypes.string),
    unitOfMeasure: PropTypes.shape({
      notation: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    manufacturer: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        ingredientName: PropTypes.string.isRequired,
        ingredientIdentifier: PropTypes.string.isRequired,
        synonyms: PropTypes.arrayOf(PropTypes.string),
        unitOfMeasure: PropTypes.shape({
          notation: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      }),
    ),
  }),
};

SupplementListItem.defaultProps = {
  supplement: undefined,
};
