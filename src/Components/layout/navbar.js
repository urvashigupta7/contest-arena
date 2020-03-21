import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Navbar=(props)=>{
    const authLinks=(
        <Fragment>
            <li>Hello user</li>
            <li>
                <a href="#"><i className='fas fa-sign-out-alt'></i><span className='hide-sm'>Logout</span></a>
            </li>
        </Fragment>
    )
    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )
    const isAuthenticated=false;
    return(
        <nav className='navbar bg-primary'>
            <h1>{props.title}</h1>
            <ul>
                {isAuthenticated?authLinks:guestLinks}
            </ul>
        </nav>
           
    )
}
Navbar.defaultProps={
    title:'Contest Arena'
}
export default Navbar;
// Client ID e5e6c5bae70021cf68095a49e9708f09
// Client Secret 1976f2387da900347fe11d28f8f40a2a
