import React, { Fragment, useEffect } from 'react';
/*
    react-router-dom
*/
import { Routes, Route } from "react-router-dom"
/*
    redux
*/
import { useDispatch } from "react-redux";
import { loginUser, clearUser } from './Reducer/userSlice';
/*
    Firebase
*/
import firebase from './firebase.js';
/*
    Components
*/
import Heading from './Component/Heading';
import List from './Component/Post/List';
import Upload from './Component/Post/Upload';
import Detail from './Component/Post/Detail';
import Edit from './Component/Post/Edit';

import Login from './Component/User/Login';
import Register from './Component/User/Register';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {

        firebase.auth().onAuthStateChanged((userInfo) => {


            if (userInfo !== null) {
                // login
                dispatch(loginUser(userInfo.multiFactor.user));
            } else {
                // logout or not login
                dispatch(clearUser())
            }
        });

    }, [])

    return (

        <Fragment>
            <Heading></Heading>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/post/:postNum" element={<Detail />} />
                <Route path="/edit/:postNum" element={<Edit />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Fragment>

    );
}

export default App;
