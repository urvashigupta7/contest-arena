import React, { useContext, useEffect } from 'react';
import AuthContext from '../../Context/auth/authContext';
import codechefIcon from '../../assets/codecheficon2.png';
const Login = (props) => {
    const authContext = useContext(AuthContext)
    useEffect(() => {
        if (localStorage.accessToken) {
            props.history.push('/');
        }
    }, [props.history])
    const onClick = () => {
        window.location.href = 'https://api.codechef.com/oauth/authorize?response_type=code&client_id=e5e6c5bae70021cf68095a49e9708f09&state=xyz&redirect_uri=https://contestarena.netlify.com/';
        authContext.setRequestLogin();
    }
    return (
        <div className="myContainer">
            <img style={{width:"200px",height:"200px"}} src={codechefIcon} alt="CodechefIcon"/>
            <h1>Login</h1>
            <button className='btn btn-block' onClick={onClick}><b>Login</b></button>
        </div>
    )
}
export default Login;