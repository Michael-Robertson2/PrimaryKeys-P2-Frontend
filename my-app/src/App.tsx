import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Router from './components/Router';
import PostPreview from './components/PostPreview';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col sm:flex-row'>
        <div className='flex-1'><Router/></div>
        <div className='bg-green-500 order-first w-64'><PostPreview/></div>
        <aside className='bg-blue-500 w-64'></aside>
      </div>
    </div>
  );
}

export default App;
