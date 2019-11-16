import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getLoggedInUser } from 'utilities/user';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        getLoggedInUser()
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export default PrivateRoute;