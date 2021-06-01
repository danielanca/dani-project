
import ReactDOM from 'react-dom'
import React from 'react'

import './App.css';
import Bodyground from './components/Bodyground.js';
import './components/bodyground.css';
import House_details from './components/House_details';

function App() {
  return (
    <div className="App">
     
        {/* <Bodyground>
        
        </Bodyground> */}

        <House_details>

        </House_details>
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
