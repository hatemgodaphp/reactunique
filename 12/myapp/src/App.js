import React from 'react';

import './App.css';
import {num1 as x,num2 as y,test} from './module.js'
function App() {
  return (
    <div className="App">
        {x+y}
    {test()}

    </div>
  );
}

export default App;
