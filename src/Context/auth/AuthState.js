import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';
import {
    GET_ACCESS_TOKEN,
    GET_REFRESH_TOKEN,
} from '../types';

const AuthState = (props) => {
    const initialState = {
        authToken:'',
        refreshToken: '',
        scope: '',
        tokenType: '',
        isAuthenticated: null,
        error: null
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const getAccessToken=async()=>{
        const config={
            headers:{
              'Content-Type':'application/json'
            }
          }
          const queryString=window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const code=urlParams.get('code');
          const data={
            "grant_type": "authorization_code",
            "code": `${code}`,
            "client_id":"e5e6c5bae70021cf68095a49e9708f09",
            "client_secret":"1976f2387da900347fe11d28f8f40a2a",
            "redirect_uri":"http://localhost:3000/"
          }
          const res= await axios.post('https://api.codechef.com/oauth/token',data,config);
          dispatch({type:GET_ACCESS_TOKEN,payload:res.data.result.data});
    }
    return (
        <AuthContext.Provider
            value={{
                authToken: state.authToken,
                refreshToken: state.refreshToken,
                scope: state.scope,
                tokenType: state.tokenType,
                isAuthenticated: state.isAuthenticated,
                error: state.error,
                getAccessToken
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthState;