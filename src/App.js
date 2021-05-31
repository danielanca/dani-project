
import ReactDOM from 'react-dom'
import React from 'react'

import './App.css';
import Bodyground from './components/Bodyground.js';
import './components/bodyground.css';

function App() {
  return (
    <div className="App">
     
        <Bodyground>
        
        </Bodyground>
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
