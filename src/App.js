
import ReactDOM from 'react-dom'
import React from 'react'

import './App.css';
import HomePage from './components/HomePage.js';
import './components/HomePage.css';
import House_details from './components/House_details';
import NavBar from './components/NavBar';
import './components/NavBar.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
          
          <NavBar/>
          
          <Router>
          
           <Route path="/x" component={HomePage} />
           <Route path="/details" component={House_details} />
        </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
