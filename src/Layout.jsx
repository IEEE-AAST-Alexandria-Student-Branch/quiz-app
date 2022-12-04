import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './styles/Layout.styles.css'
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className='Layout'>
            <Navbar className='Navbar' />
            <Outlet />
        </div>
    )
}

export default Layout;