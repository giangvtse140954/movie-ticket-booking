import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { clientRoutes } from './routes';
import ClientLayout from './layouts/ClientLayout';
class App extends Component {
  renderLayout(routes, Layout) {
    return routes.map((route) => {
      const { path, component, exact } = route;
      return <Layout path={path} component={component} exact={exact} />;
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>{this.renderLayout(clientRoutes, ClientLayout)}</Switch>
        </Router>
      </div>
    );
  }
}

export default App;
