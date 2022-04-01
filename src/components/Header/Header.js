import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to T-shirt mania</h2>

            <nav className='link'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/orderReview'}>Order Review</Link>
                <Link to={'/grandpa'}>GrandPa</Link>
            </nav>
        </div>
    );
};

export default Header;