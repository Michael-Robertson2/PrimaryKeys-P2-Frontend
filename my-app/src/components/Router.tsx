import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage';
import Feed from '../pages/Feed';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

function Router(){
    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/feed' element={<Feed />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<ErrorPage />}/>


        </Routes>
    )
}

export default Router;