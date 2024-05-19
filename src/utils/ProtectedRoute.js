import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoute = () => {
    // Check for the token in localStorage
    const token = localStorage.getItem('token');

    // If the token exists, render the Outlet which contains the protected components
    // If not, redirect to the login page
    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
