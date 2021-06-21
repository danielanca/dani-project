
import ReactDOM from 'react-dom'
import React from 'react'

import './App.css';
import HomePage from './page_sections/HomePage';
import House_details from './page_sections/House_details';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  
  let house_id = 1;
  return (
    <div className="App">
          
         
          <Router>
            
            <Route path="/home" component= {HomePage} />

            <Route path="/details/:id">
                  <House_details/>
            </Route>
            
        </Router>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
