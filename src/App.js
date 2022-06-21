import React from 'react';
import './App.css';
// import Nav from './views/nav';
import Notita from './views/notita';
import Login from './views/login';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={Login()} />
        <Route path='/notita' element={Notita()} />
      </Routes>
    </Router>
  );
}

export default App;

