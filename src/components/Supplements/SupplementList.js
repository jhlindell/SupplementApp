import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { fetchSupplements } from './actions';
import SupplementListItem from './SupplementListItem';

const useStyles = makeStyles({
  root: {
    padding: 8,
  },
});

function SupplementList() {
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
          <Grid container spacing={2}>
            {supplements.map(supplement => {
              return (
                <SupplementListItem
                  key={supplement.identifier}
                  supplement={supplement}
                />
              );
            })}
          </Grid>
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

export default SupplementList;
