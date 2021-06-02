
import ReactDOM from 'react-dom'
import React from 'react'

import './App.css';
import HomePage from './components/HomePage.js';
import './components/HomePage.css';
import House_details from './components/House_details';

function App() {
  return (
    <div className="App">
     {/* First page */}
        <HomePage> </HomePage> 
{/* 
        <House_details>

        </House_details> */}
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
