import React from 'react';

class ErrorBoundary extends React.Component {
  children = this.props.children;
  state = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorMessage: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="jumbotron">
          <h1 className="display-4">{this.state.errorMessage}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
