import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import Main from "./component/Main";
import Profile from "./profile/profile";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/profile/:username" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
