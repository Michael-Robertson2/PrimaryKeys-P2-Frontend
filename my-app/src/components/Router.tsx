import React from 'react';
import { Routes, Route } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage';
import FeedPage from '../pages/FeedPage';
import HomePage from '../pages/HomePage';
import Login from '../pages/LoginPage';
import Profile from '../pages/Profile';

function Router(){
    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/feed' element={<FeedPage/>}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<ErrorPage />}/>


        </Routes>
    )
}

export default Router;