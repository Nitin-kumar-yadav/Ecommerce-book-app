import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


export const ProtectedRoute = () => {
    // Check for the token in localStorage
    const token = localStorage.getItem('token');
    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AdminRoute = () => {
    // Check for the token in localStorage
    const id = "66459806096ae7b510f9831a"
    const userId = localStorage.getItem('userId');
    return userId === id ? <Outlet /> : <Navigate to="admin" replace />;
}

