import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '92vh',
    paddingLeft: 20,
    paddingRight: 20,
  },
  categoryCard: {
    display: 'flex',
    margin: '20px auto auto auto',
    flexDirection: 'column',
    height: 400,
    '&:hover': {
      boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
    },
  },
  cardContent: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={4}>
        <Card
          className={classes.categoryCard}
          onClick={() => navigate('/supplements')}
        >
          <CardContent>Supplements</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card className={classes.categoryCard}>
          <CardContent>Regiments</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card className={classes.categoryCard}>
          <CardContent>Schedule</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;
