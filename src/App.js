import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import FriendsContainer from './components/Friends/FriendsContainer';


const App = (props) => {
  return (
    
    <div className='app-wraper'>
      <div className='main-app'>
        <Header />
        <NavbarContainer/>
        <div className='app-wraper-content'>
          <Routes>
            <Route path='/profile' element = {<Profile />} />
            <Route path='/dialogs/*' element = {<DialogsContainer />} />
            <Route path='/news' element = {<News />} />
            <Route path='/music' element = {<Music />} />
            <Route path='/settings' element = {<Settings />} />
            <Route path= '/friends' element = {<FriendsContainer />}/>
          </Routes> 
        </div>
      </div> 
    </div>
    
    );
}
export default App;
