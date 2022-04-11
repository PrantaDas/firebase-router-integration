import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link className='item' to='/'>Home</Link>
                <Link className='item' to='/products'>Products</Link>
                <Link className='item' to='/orders'>Orders</Link>
                <Link className='item' to='/regidter'>Register</Link>
                <Link  className='item' to='/login'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;