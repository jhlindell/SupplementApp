import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
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
});

function SupplementMain() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Welcome to Supplements!</h1>
    </div>
  );
}

export default SupplementMain;
