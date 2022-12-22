import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Router from './components/Router';

function App() {
  return (
    <div className='min-h-screen flex flex-col h-screen'>
      <Navbar/>
      <div className='flex-1 flex flex-row overflow-y-hidden'>

        <div className='bg-green-500 w-1/3 overflow-y-aut'></div>
        <div className='flex-1 w-80 overflow-hidden'><Router/></div>
        <div className='bg-blue-500 w-1/3 overflow-y-aut'></div>
      </div>
    </div>
  );
}

export default App;
