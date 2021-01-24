import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <ul style={{ margin: '15px' }}>
                <li className='btn'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='btn'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='btn'>
                    <Link to='/people'>People</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
