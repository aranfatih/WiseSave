import React, { Component } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  avatar: {
  }
}));
export default function Navigation() {
  const classes = useStyles();
  const [isOpen, setToggle] = useState(0);
  return (
    <div>
      <AppBar position="static" color="#FFF">
        <Toolbar>
          <div className={{flex: 1}}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Avatar className={classes.avatar}>A</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" classes={{paper: classes.drawerPaper}} open={isOpen}>
      </Drawer>
    </div>
  );
}
