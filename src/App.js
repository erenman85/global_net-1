import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {
  return (
    <div className='app-wraper'>
      <div className='main-app'>
        <Header />
        <Navbar />
        <Profile />
      </div> 
    </div>
    );
}
export default App;