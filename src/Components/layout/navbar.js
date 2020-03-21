import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/auth/authContext';
const Navbar = (props) => {
    const authContext = useContext(AuthContext);
    const logout = () => {
        authContext.logout();
    }
    const authLinks = (
        <Fragment>
            <li>Hello user</li>
            <li>
                <a onClick={logout} href="/login"><i className='fas fa-sign-out-alt'></i><span className='hide-sm'>Logout</span></a>
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
    return (
        <nav className='navbar bg-primary'>
            <h1>{props.title}</h1>
            <ul>
                {authContext.isAuthenticated ? authLinks : guestLinks}
            </ul>
        </nav>

    )
}
Navbar.defaultProps = {
    title: 'Contest Arena'
}
export default Navbar;
