import { useState, useEffect } from 'react';
import './App.css';
import Header from './Layout/Header';
import Main from './Layout/Main';
import Mock  from './Mock/mock.json'




function App() {

  useEffect(() => {
    
  })

  return (
    <div fluid="md" className="App">
      <Header />
      <Main arr={Mock} />
    </div>
  );
}

export default App;