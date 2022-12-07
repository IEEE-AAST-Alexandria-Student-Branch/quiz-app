import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoutes({ children }) {

    const user = useSelector(store => store.user)
    const localAccessToken = localStorage.getItem('quizzAppAccessToken')
    if (user.accessToken === localAccessToken && localAccessToken !== null) {
        return <Outlet />
    }

    return (
        <Navigate to={'/signin'} />
    )
}


