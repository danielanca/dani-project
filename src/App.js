
import ReactDOM from 'react-dom'
import React from 'react'

import './App.css';
import HomePage from './components/HomePage.js';
import './components/HomePage.css';
import House_details from './components/House_details';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import SiteFooter from './components/SiteFooter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  
  let house_id = 1;
  return (
    <div className="App">
          
          {/* <NavBar/> */}
          
          {/* <WorkArea></WorkArea> */}
          {/* <SiteFooter/> */}
          {/* <HomePage/> */}
         
          <Router  >
            {/* <Route path="/work" component={WorkArea}> </Route> */}
           
          
           <Route path="/home" component={HomePage} />

           <Route path="/details/:id">
            <House_details/>
           </Route>
            
         
        </Router>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
