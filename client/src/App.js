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
import CreateNew from "./components/pages/create_new/CreateNew";
import ThreadMain from "./components/pages/Thread/ThreadMain";
import ThreadFinished from "./components/pages/Thread/ThreadFinished";
// import Logo from ''
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
              style={{ width: "80%" }}
              width="80%"
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
              <Route exact path="/" render={() => <ProfileMain />} />
              <Route exact path="/Profile" render={() => <ProfileMain />} />
              <Route exact path="/New" render={() => <CreateNew />} />
              <Route exact path="/thread" render={() => <ThreadMain />} />
              <Route
                exact
                path="/thread/:id"
                render={() => <ThreadFinished />}
              />
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
        <div
          style={{
            width: "100%",
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src="wise-save-logo.png" style={{ width: 100 }} />
          <h1 style={{ fontWeight: "bolder", fontSize: 24 }}>WiseSave</h1>
        </div>
        <Divider />
        <List>
          {[
            { name: "Home", link: "/" },
            { name: "Profile", link: "/profile" },
            { name: "New Saving", link: "/thread" },
            { name: "History", link: "/" }
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Link to={text.link}>{text.name}</Link>
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {["Logout", "Language", "About Us"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
            </ListItem>
          ))}
        </List> */}
      </div>
    );
  };
}
