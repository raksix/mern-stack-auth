import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import { auth } from "../auth"
import { SET_USER_DATA } from "../store/actions/user"

export const PrivateRoute = ({ component: Component, ...rest }) => {

    const dispatch = useDispatch();
    const [isFetch, setFetch] = useState(false)

    if (localStorage.getItem('token')) {
        auth().then(data => {
            if (data.message === 'success') {
                dispatch(SET_USER_DATA(data))
                setFetch(true)
            } else {
                localStorage.removeItem("token");
                window.location.href = './login'
            }
        }).catch(e => {
            localStorage.removeItem("token");
            window.location.href = './login'
        })
    }

    if(isFetch === false){
        return (
            <></>
        )
    }else{
        return (
            <Route
                {...rest}
                render={props =>
                    localStorage.getItem("token") ? (
                        <>
                            <Component {...props} />
                        </>
                    ) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}></Redirect>
                    )}
            ></Route>
        )
    }
}



