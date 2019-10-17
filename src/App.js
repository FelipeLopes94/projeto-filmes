import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header >
        <NavBar/>
      </header>
      <body className ="main-body">

        <div className="cards">
          <Card/>
        </div>
        <div className="cards">
          <Card/>
        </div>
        <div className="cards">
          <Card/>
        </div>
        <div className="cards">
          <Card/>
        </div>

      </body>

    </div>

  );
}

export default App;
