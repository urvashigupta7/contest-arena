import React, { useContext, useEffect } from 'react';
import AuthContext from '../../Context/auth/authContext';
import codechefIcon from './codecheficon2.png';
let redirect_uri='';
if(process.env.NODE_ENV!=='production'){
	    redirect_uri=process.env.REACT_APP_REDIRECT_URI;
}
else{
    redirect_uri=process.env.REDIRECT_URI
}
const Login = (props) => {
    const authContext = useContext(AuthContext)
    useEffect(() => {
        if (localStorage.accessToken) {
            props.history.push('/');
        }
    }, [props.history])
    const onClick = () => {
        window.location.href = 'https://api.codechef.com/oauth/authorize?response_type=code&client_id=e5e6c5bae70021cf68095a49e9708f09&state=xyz&redirect_uri='+redirect_uri;
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