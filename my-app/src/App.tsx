import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Router from './components/Router';


function App() {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col sm:flex-row'>
      <div className='flex-1'><Router/></div>
      <div className='bg-green-500 order-first w-64'></div>
      <aside className='bg-blue-500 w-64'></aside>
      </div>
      
    </div>
  );
}

export default App;
