import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';
import NavBar from './Navbar';
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './modal';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <NavBar/>
      </header>

      <body className ="main-body">

        <div className="cards">
          <Card linkImagem="https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/P%C3%B4ster_Star_Wars.jpg/250px-P%C3%B4ster_Star_Wars.jpg" nomeCard="A new hope"/>
        </div>
        <div className="cards">
          <Card linkImagem="https://upload.wikimedia.org/wikipedia/pt/thumb/6/63/Star_Wars_The_Clone_Wars.jpg/250px-Star_Wars_The_Clone_Wars.jpg" nomeCard="Atack of clones"/>
        </div>
        <div className="cards">
          <Card linkImagem="https://upload.wikimedia.org/wikipedia/pt/thumb/0/05/Star_Wars_Phantom_Menace_-_P%C3%B4ster.jpg/250px-Star_Wars_Phantom_Menace_-_P%C3%B4ster.jpg" nomeCard="The phantom menace"/>
        </div>
        <div className="cards">
          <Card linkImagem="https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg/250px-Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg" nomeCard="The revenge os the Sith"/>
        </div>
        <div className="cards">
          <Card linkImagem="https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg" nomeCard="The return of the jedi"/>
        </div>
        <div className="cards">
          <Card linkImagem="https://upload.wikimedia.org/wikipedia/pt/thumb/5/5c/The_Empire_Strikes_Back.jpg/250px-The_Empire_Strikes_Back.jpg" nomeCard="The empire is back"/>
        </div>
        <div className="cards">
          <Card linkImagem="https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Starwars_06.jpg/250px-Starwars_06.jpg" nomeCard="The Force Awakens" resumoFilme="teste"/>
        </div>
          <Modal/>
      </body>

      <footer className="footer">
          <Footer/>
      </footer>
    </div>

  );
}

export default App;
