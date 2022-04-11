import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user,handleSignout}=useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link className='item' to='/'>Home</Link>
                <Link className='item' to='/products'>Products</Link>
                <Link className='item' to='/orders'>Orders</Link>
                <Link className='item' to='/register'>Register</Link>
                <span>{user?.displayName&&user.displayName}</span>
               {
                 user?.uid ? <button onClick={handleSignout}>SignOut</button> : 
                <Link  className='item' to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;