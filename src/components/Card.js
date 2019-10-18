import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";
import axios from "axios";

class Card extends React.Component {
  componentDidMount() {
    axios.get(`https://swapi.co/api/films/`).then(res => {
      const filmes = res.data.results;
      this.setState({ filmes });
      console.log("Lista de filmes", filmes);
    });
  }

  state = {};
  render() {
    if (this.state.filmes === undefined) return <p>carregando</p>;

    return (
      <div>
        {this.state.filmes.map(filme => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img
                class="imagens-card"
                src={this.props.linkImagem}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{filme.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <Button
                type="submit"
                data-toggle="modal"
                data-target="#ExemploModalCentralizado"
              >
                Resumo do Filme
              </Button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
