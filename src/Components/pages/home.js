import React,{useEffect,useContext} from 'react';
import axios from 'axios';
import AuthContext from '../../Context/auth/authContext'
 
  
const Home=()=>{
    var accessToken='';
    var refreshToken='';
    var scope='';
    var tokentype='';
    const authContext=useContext(AuthContext);

    useEffect(()=>{
        authContext.getAccessToken();
    },[]);
	return(
		<h1>Hello
        </h1>
        
	)
	
}
export default Home;