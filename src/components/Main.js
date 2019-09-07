import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div>
        <AppBar
          position="static"
          style={{
            background: "white",
            color: "rgb(0, 151, 226)",
            boxShadow: "none",
            width: "400px"
          }}
        >
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon onClick={() => this.props.clicked()} />
            </IconButton>
            <Typography variant="h6">WiseSave</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Main;
