import React, { Component } from 'react';
import { WarningAlt } from '@carbon/icons-react';
import { useNavigate } from 'react-router-dom';

function ErrorBoundaryWrapper({ children }) {
  const navigate = useNavigate();

  return <ErrorBoundary navigate={navigate}>{children}</ErrorBoundary>;
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleGoHome = () => {
    this.setState({ hasError: false });
    this.props.navigate('/');
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
          <div className='text-red-500 mb-4'>
          <WarningAlt size={30}/>
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">Oops! Something went wrong.</h1>
          <p className="text-gray-600 mb-6">We encountered an unexpected issue. Please try again, or contact support if the problem persists.</p>
          <button
            onClick={this.handleGoHome}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Go to Home
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundaryWrapper;
