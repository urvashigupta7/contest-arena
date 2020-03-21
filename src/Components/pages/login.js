import React, { useContext, useEffect } from 'react';
import AuthContext from '../../Context/auth/authContext';
const Login = (props) => {
    const authContext = useContext(AuthContext)
    useEffect(() => {
        if (localStorage.accessToken) {
            props.history.push('/');
        }
    }, [props.history])
    const onClick = () => {
        window.location.href = 'https://api.codechef.com/oauth/authorize?response_type=code&client_id=e5e6c5bae70021cf68095a49e9708f09&state=xyz&redirect_uri=http://localhost:3000/';
        authContext.setRequestLogin();
    }
    return (
        <div className="myContainer">
        <div style={{ align: "center" }}>
            <h1>Login</h1>
            <button className='btn btn-light btn-block' onClick={onClick}>Login</button>
        </div>
        </div>
    )
}
export default Login;