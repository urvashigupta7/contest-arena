import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
    GET_ACCESS_TOKEN,
    GET_REFRESH_TOKEN,
    LOGOUT,
    SET_REQUEST_LOGIN
} from '../types';
let CodechefClientId='';
let CodechefClientSecret='';
let redirect_uri='';
if(process.env.NODE_ENV!=='production'){
  
	CodechefClientId=process.env.REACT_APP_CLIENT_ID;
    CodechefClientSecret=process.env.REACT_APP_CLIENT_SECRET;
    redirect_uri=process.env.REACT_APP_REDIRECT_URI;
}
else{
	CodechefClientId='e5e6c5bae70021cf68095a49e9708f09';
    CodechefClientSecret='1976f2387da900347fe11d28f8f40a2a';
    redirect_uri='https://contestarena.netlify.com/'
}
const AuthState = (props) => {
    const initialState = {
        accessToken:localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
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
            "client_id":`${CodechefClientId}`,
            "client_secret":`${CodechefClientSecret}`,
            "redirect_uri":`${redirect_uri}`
          }
        
          try{
          const res= await axios.post('https://api.codechef.com/oauth/token',data,config);
          setInterval(()=>{
           getRefreshToken();
          },3600*1000-5)
          dispatch({type:GET_ACCESS_TOKEN,payload:res.data.result.data});
          }catch(err){
            console.log(err)
          }
          
    }
    const getRefreshToken=async()=>{
        const config={
            headers:{
              'Content-Type':'application/json'
            }
          }
        const data={
            "grant_type": "refresh_token",
            "refresh_token":localStorage.getItem('refreshToken'),
            "client_id":`${CodechefClientId}`,
            "client_secret":`${CodechefClientSecret}`
          } 
          try{
            const res= await axios.post('https://api.codechef.com/oauth/token',data,config);
            dispatch({type:GET_REFRESH_TOKEN,payload:res.data.result.data});
            }catch(err){
              console.log(err)
            }    
    }
    const logout=()=>{
        dispatch({type:LOGOUT});
    }
    const loadPage=()=>{
        setAuthToken(localStorage.getItem('accessToken'));
    }
    const setRequestLogin=()=>{
        dispatch({type:SET_REQUEST_LOGIN})
    }
    return (
        <AuthContext.Provider
            value={{
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                error: state.error,
                getAccessToken,
                loadPage,
                logout,
                setRequestLogin
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthState;