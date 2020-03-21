import React from 'react';
const Login=(props)=>{
    const onClick=()=>{
           window.location.href='https://api.codechef.com/oauth/authorize?response_type=code&client_id=e5e6c5bae70021cf68095a49e9708f09&state=xyz&redirect_uri=http://localhost:3000/';
    }
    return (
        <div style={{align:"center"}}>
        <h1>Login</h1>
        <button className='btn btn-light btn-block' onClick={onClick}>Login</button>
        </div>
    )
}
export default Login;