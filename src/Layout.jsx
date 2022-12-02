import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './styles/Layout.styles.css'

const Layout = ({ children }) => {
    return (
        <div className='Layout'>
            <Navbar className='Navbar' />
            <main className='main'>{children}</main>
        </div>
    )
}

export default Layout;