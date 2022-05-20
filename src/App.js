import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import LoginScreen from './pages/loginScreen';
import SecondScreen from './pages/secondScreen';
import { Route,Routes } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<LoginScreen></LoginScreen>}/>
      <Route path='/main' element = {<SecondScreen></SecondScreen>}/>
    </Routes>
  );
}

export default App;
