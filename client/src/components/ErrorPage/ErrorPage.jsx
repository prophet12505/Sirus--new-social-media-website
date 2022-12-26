import React from 'react';
import "./ErrorPage.css"
const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-message">Oops! Something went wrong.</h1>
      <p className="error-description">
        We're sorry, but something went wrong and the page you are trying to access is unavailable. Please try again later.
      </p>
    </div>
  );
};

export default ErrorPage;