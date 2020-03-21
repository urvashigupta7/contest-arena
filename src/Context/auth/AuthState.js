import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';
import {
    GET_ACCESS_TOKEN,
    GET_REFRESH_TOKEN,
    LOGOUT,
    LOAD_HOMEPAGE,
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
	CodechefClientId=process.env.CLIENT_ID;
    CodechefClientSecret=process.env.CLIENT_SECRET;
    redirect_uri=process.env.REDIRECT_URI
}
const AuthState = (props) => {
    const initialState = {
        accessToken:localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
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
            "client_id":`${CodechefClientId}`,
            "client_secret":`${CodechefClientSecret}`,
            "redirect_uri":`${redirect_uri}`
          }

          try{
          const res= await axios.post('https://api.codechef.com/oauth/token',data,config);
          loadHomePage();
          dispatch({type:GET_ACCESS_TOKEN,payload:res.data.result.data});
          }catch(err){
            console.log(err)
          }
          
    }
    const logout=()=>{
        dispatch({type:LOGOUT});
    }
    const loadHomePage=()=>{
        dispatch({type:LOAD_HOMEPAGE})
    }
    const setRequestLogin=()=>{
        dispatch({type:SET_REQUEST_LOGIN})
    }
    return (
        <AuthContext.Provider
            value={{
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
                isAuthenticated: state.isAuthenticated,
                error: state.error,
                getAccessToken,
                loadHomePage,
                logout,
                setRequestLogin
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthState;