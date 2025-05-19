import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
       <div className="min-h-screen flex items-center justify-center bg-base-200 text-center p-4">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-error">404</h1>
          <p className="text-xl font-semibold mt-4">Oops! Page Not Found</p>
          <p className="mt-2 text-base-content/70">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link to="/" className="btn mt-4 btn-success text-white md:mb-16">
            Go to HobbyHub
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;