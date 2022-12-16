import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Router from './components/Router';
import PostPreview from './components/PostPreview';

function App() {
  return (
    <div className='min-h-screen flex flex-col h-screen'>
      <Navbar/>
      <div className='flex-1 flex flex-row overflow-y-hidden'>

        <div className='bg-green-500 overflow-y-aut'><PostPreview/></div>
        <div className='flex-1 w-80 overflow-y-auto'><Router/></div>
        <div className='bg-blue-500 w-80 overflow-y-aut'></div>
      </div>
    </div>
  );
}

export default App;
