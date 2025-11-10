import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
    return (
    <div>Loading......</div>
    );
  }

    if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;