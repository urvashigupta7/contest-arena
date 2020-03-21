import React from 'react'
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {


    return (
        <Route {...rest} render={props => !localStorage.requestLogin ? (<Redirect to='/login' />) :
            (<Component {...props} />)} />
    )

}
export default PrivateRoute;