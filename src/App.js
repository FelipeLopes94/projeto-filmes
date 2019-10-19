import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/Navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/Modal";
import { resultAPI } from "./API/ApiFilmes";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <NavBar />
      </header>

      <body className="main-body">
        <div className="cards">
          <Card
            linkImagem="https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/P%C3%B4ster_Star_Wars.jpg/250px-P%C3%B4ster_Star_Wars.jpg"
            nomeCard="A new hope"
          >
            <Modal />
          </Card>
        </div>

      </body>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
