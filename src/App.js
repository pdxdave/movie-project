import React from 'react';
import './App.css';
import {Router} from 'react-router-dom'


import Header from './components/Header'
import HomePage from './HomePage'

function App() {
  return (
    <React.Fragment>
        <Header />
          <Router>
            <HomePage />
          </Router>
    </React.Fragment>
  );
}

export default App;
