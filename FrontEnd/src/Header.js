/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { headerStyle } from './headerStyle';
import Fanlinclogo from './img/fanlinc_logo.png';

export default function Header(props) {
  const classes = headerStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const { loggedInUser, setCookie } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // set loggedInUser cookie to null to end session and log out user
    setCookie('loggedInUser', null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div>
          <img
            src={Fanlinclogo}
            height="70"
            width="70"
            alt="Fanlinc logo"
          />
        </div>
        <Typography variant="h6" className={classes.title}>
            Fanlinc
        </Typography>
        <div>
          <Typography variant="h6" className={classes.title}>
            {loggedInUser}
          </Typography>
        </div>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  setCookie: PropTypes.func.isRequired,
};
