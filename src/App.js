import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import './App.css';

import modules from './modules';
import NavBar from './components/NavBar';

function App(props) {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar modules={modules}/>
        </header>
        <div>
          {modules.map(module => (
            <Route {...module.routeProps} key={module.name} />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
