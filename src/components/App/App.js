import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from '@reach/router';
import Home from '../Home/Home';
import Navbar from '../NavBar/Navbar';
import Ingredients from '../Ingredients/Ingredients';
import Ingredient from '../Ingredients/IngredientDisplay';

const useStyles = makeStyles({
  appRoot: {
    height: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.appRoot}>
      <Navbar />
      <Router>
        <Home path="/" />
        <Ingredients path="/ingredients" />
        <Ingredient path="/ingredients/:id" />
      </Router>
    </div>
  );
}

export default App;
