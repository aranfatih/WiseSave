import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navigation from './components/Navigation'
import Home from './components/pages/Home';

export default class App extends React.Component {
  render() {
    return(
    <div>
      <BrowserRouter>
      <div>
        <Navigation loggedIn={true} />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </div>
      </BrowserRouter>
    </div>
    )
  }
}
