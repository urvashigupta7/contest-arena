import React, { useEffect, useContext } from 'react';
import AuthContext from '../../Context/auth/authContext';
import Spinner from '../layout/spinner.js';
const Load = (props) => {
    const authContext = useContext(AuthContext);
    useEffect(() => {

        const getToken = async () => {
            if(!localStorage.requestLogin){
                props.history.push('/login');
            }
            else if (!localStorage.accessToken && localStorage.requestLogin) {
                await authContext.getAccessToken();
                console.log("hello");
            }else{
            props.history.push('/home');
            console.log("bye")
            }
        }
        getToken();
    },[authContext.accessToken])
    return (
        <div className="myContainer">
              <Spinner/>
        </div>
    )

}
export default Load;