import React from 'react';
import './App.css';
import Child from './Child';

function App() {
  var d = new Date();
  var n = d.toDateString();
  return (
    <div className="App">
      <h1>This is the parent part</h1>
      <hr />
      <Child DatePassed={n} />
    </div>
    
  );
}

export default App;
