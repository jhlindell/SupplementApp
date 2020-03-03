import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSupplements } from './actions';

const useStyles = makeStyles({
  root: {},
});

function SupplementMain() {
  const supplements = useSelector(state => state.supplements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSupplements());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

  function renderSupplements() {
    if (supplements.length) {
      return (
        <div className={classes.root}>
          {supplements.map(supplement => {
            return <div key={supplement.name}>{supplement.name}</div>;
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

  return <div className={classes.root}>{renderSupplements()}</div>;
}

export default SupplementMain;
