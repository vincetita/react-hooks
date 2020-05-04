import React from 'react';
import Toggler from './Toggler'
import SimpleFormHooks from './SimpleFormInputHook'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggler />
        <SimpleFormHooks />
      </header>
    </div>
  );
}

export default App;
