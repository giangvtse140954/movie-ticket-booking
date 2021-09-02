import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const withLayout = (WrappedComponent) => {
  return class extends Component {
    render() {
      const { component: Component, ...rest } = this.props;
      return (
        <Route
          {...rest}
          render={(routeProps) => (
            <WrappedComponent>
              <Component {...routeProps} />
            </WrappedComponent>
          )}
        />
      );
    }
  };
};
export default withLayout;
