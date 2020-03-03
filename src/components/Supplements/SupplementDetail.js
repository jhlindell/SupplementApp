import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import { getSupplement } from './actions';

const useStyles = makeStyles({
  cardContent: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    padding: 8,
  },
});

function SupplementDetail(props) {
  const classes = useStyles();
  const supplement = useSelector(state => state.supplement);
  const dispatch = useDispatch();
  const { id } = props;

  useEffect(() => {
    if (id) {
      dispatch(getSupplement(id));
    }
  }, [dispatch, id]);

  return (
    <div className={classes.root}>
      <Card className={classes.cardContent}>
        <CardHeader title={supplement.name} />
        <CardContent className={classes.cardContent}>
          <div>
            <div>identifier: {supplement.identifier}</div>
            <div>price: {supplement.price}</div>
            <div>
              unit of measure: {supplement.unitOfMeasure.name}
            </div>
            <div>manufacturer: {supplement.manufacturer.name}</div>
            <div>
              ingredients:
              {supplement.ingredients.map(ingredient => {
                return (
                  <li key={ingredient.ingredientIdentifier}>
                    {ingredient.ingredientName}
                  </li>
                );
              })}
            </div>
            <div>
              notes:
              {supplement.notes.map(note => {
                return <li key={note}>{note}</li>;
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SupplementDetail;

SupplementDetail.propTypes = {
  id: PropTypes.string,
};

SupplementDetail.defaultProps = {
  id: undefined,
};
