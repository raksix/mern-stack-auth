import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export const NotAuth = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("token") ? (
                <Redirect to={{
                    pathname: '/me',
                    state: { from: props.location }
                }}></Redirect>
            ) : (
                    <>
                        <Component {...props} />
                    </>
                )}
    ></Route>
)