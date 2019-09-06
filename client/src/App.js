import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Home from "./home/home";
import Main from "./components/Main";
import ProfileMain from "./components/pages/profile/ProfileMain";
// import Profile from "./profile/profile";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggleDrawer(value, boolean) {}

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Drawer
              anchor="left"
              open={this.state.open}
              onClose={e => this.setState({ open: false })}
            >
              {this.fullList()}
            </Drawer>
            <Main clicked={e => this.setState({ open: true })} />
            <Switch>
              {/* <Route
                exact
                path="/"
                render={() => (
                  <Main clicked={e => this.setState({ open: true })} />
                )}
              /> */}
              <Route exact path="/Profile" render={() => <ProfileMain />} />
              {/* <Route exact path="/profile/:username" component={Profile} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

  fullList = side => {
    return (
      <div
        role="presentation"
        onClick={() => this.setState({ open: false })}
        onKeyDown={() => this.setState({ open: false })}
      >
        <List>
          {["Profile", "New", "History"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Link to={"/" + text}>{text}</Link>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Logout", "Language", "About Us"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };
}
