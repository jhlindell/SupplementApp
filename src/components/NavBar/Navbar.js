import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { navigate } from '@reach/router';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 10,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'black',
  },
});

function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleIngredientsClick = () => {
    setAnchorEl(null);
    navigate('/ingredients');
  };

  const handleHomeClick = () => {
    setAnchorEl(null);
    navigate('/');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleHomeClick}>Home</MenuItem>
            <MenuItem onClick={handleIngredientsClick}>
              Ingredients
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Pillz
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
