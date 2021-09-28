import { Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { clientRoutes } from './routes';
import ClientLayout from './layouts/ClientLayout';
import Login from './containers/shared/Auth/Login/Login';
import history from './utils/history';
class App extends Component {
  renderLayout(routes, Layout) {
    return routes.map((route, idx) => {
      const { path, component, exact, isPrivate } = route;
      return (
        <Layout
          key={idx}
          path={path}
          component={component}
          exact={exact}
          isPrivate={isPrivate}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            {this.renderLayout(clientRoutes, ClientLayout)}
            <Route path='/login' component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
