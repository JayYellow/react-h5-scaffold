import _ from 'lodash';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Route, Router, Switch } from 'react-router-dom';

import routerConfigs from './constants/router-config';
import history from './utils/historyUtil';


class App extends Component {
  public render() {
    return (
      <Router history={history}>
        <Switch>
          <Redirect exact={true} from="/" to="/homepage" />
          {_.map(routerConfigs, (item, index) => {
            return (
              <Route
                exact={true}
                path={`/${item.routerName}`}
                component={item.component}
                key={index}
              />
            );
          })}
        </Switch>
      </Router>

    );
  }
}

export default App;
