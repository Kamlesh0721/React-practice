import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Limit Exceeded !</h1>
          <h2>Refresh the page</h2>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
