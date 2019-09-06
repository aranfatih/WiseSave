import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';

export default class App extends React.Component {
  render() {
    return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
    )
  }
}
