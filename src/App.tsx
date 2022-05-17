import React from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button backgroundColour='green' width='150' height='150' onClick={() => console.log('clicked')}>
          Press me
        </Button>
      </header>
    </div>
  );
}

export default App;
