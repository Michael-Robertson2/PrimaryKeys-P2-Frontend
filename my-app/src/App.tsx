import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Router from './components/Router';
import PostPreview from './components/PostPreview';


function App() {
  return (
    <div>
      <Navbar/>
      <Router/>
      <PostPreview/>
    </div>
  );
}

export default App;
