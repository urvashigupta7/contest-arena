import {
    GET_ACCESS_TOKEN,
    GET_REFRESH_TOKEN
} from '../types';
export default (state,action)=>{
    switch(action.type){
        case GET_ACCESS_TOKEN:
            return{
                ...state,
                isAuthenticated:true,
                authToken:action.payload.auth_token,
                refreshToken:action.payload.refresh_token,
                scope:action.payload.scope,
                tokenType:action.payload.token_type
            }
        default:
            return state
    }
}