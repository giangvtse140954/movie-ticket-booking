import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const withLayout = (WrappedComponent) => {
  return class extends Component {
    render() {
      const { component: Component, isPrivate, ...rest } = this.props;
      const content = (
        <Route
          {...rest}
          render={(routeProps) => (
            <WrappedComponent>
              <Component {...routeProps} />
            </WrappedComponent>
          )}
        />
      );

      // protect private route
      if (isPrivate) {
        // if (currentUser) {
        return content;
        // }
      }

      return content;
    }
  };
};
export default withLayout;
