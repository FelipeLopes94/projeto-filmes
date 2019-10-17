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
          <Card linkImagem="https://cdn.pixabay.com/photo/2012/06/18/01/07/iguana-50198_960_720.jpg" nomeCard="Iguana"/>
        </div>
        <div className="cards">
          <Card linkImagem="https://cdn.pixabay.com/photo/2016/02/07/18/19/brazil-1185279__340.jpg" nomeCard="Tucano"/>
        </div>
        <div className="cards">
          <Card linkImagem="https://cdn.pixabay.com/photo/2012/06/18/01/29/parrot-50202__340.jpg" nomeCard="Arara"/>
        </div>
        <div className="cards">
          <Card linkImagem="https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314__340.jpg" nomeCard="Aguia"/>
        </div>

      </body>

    </div>

  );
}

export default App;
