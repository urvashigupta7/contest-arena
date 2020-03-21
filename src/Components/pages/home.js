import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../Context/auth/authContext'


const Home = (props) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        if (localStorage.accessToken) {
            authContext.loadHomePage();
        }
    }, []);
    return (
        <h1>Hello
        </h1>

    )

}
export default Home;