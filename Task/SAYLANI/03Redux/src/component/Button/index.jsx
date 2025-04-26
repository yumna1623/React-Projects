import React from 'react'
import "./index.css"
import { useDispatch, useSelector } from 'react-redux';
import {UserLogin} from '../../Store/action'	

const Button = () => {
    const isUserLogin = useSelector((state) => state.auth.isLoggedin);
    const dispatch = useDispatch();

    return (
        <button onClick={() => {
            dispatch(UserLogin())
        }} className='btn'>{isUserLogin ? "Logout" : "Login"}</button>
    )
}

export default Button