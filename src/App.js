import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/Navbar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <NavBar />
      </header>

      <body className="main-body">
          <div classnName="container">
            <div className="cards row col-md-12" >
              <Card/>
            </div>
          </div>
      </body>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
