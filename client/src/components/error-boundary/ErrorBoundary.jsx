import React from "react";

import "./ErrorBoundary.scss";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-boundary">
          <div className="image" />
          <div className="text">Sorry, this page is broken.</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
