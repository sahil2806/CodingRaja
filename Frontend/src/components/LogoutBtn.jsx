/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'

import {logout} from '../store/authSlice.js'
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/login");
    }

    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}

export default LogoutBtn;
