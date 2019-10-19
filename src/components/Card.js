import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";
import axios from "axios"

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

    let imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/P%C3%B4ster_Star_Wars.jpg/250px-P%C3%B4ster_Star_Wars.jpg"



    return (
      <div>
        {this.state.filmes.map(filme => {
          console.log(filme.title)
           if (filme.title === "Attack of the Clones")
              imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/6/63/Star_Wars_The_Clone_Wars.jpg/250px-Star_Wars_The_Clone_Wars.jpg"
               else if (filme.title === "The Phantom Menace")
                imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/0/05/Star_Wars_Phantom_Menace_-_P%C3%B4ster.jpg/250px-Star_Wars_Phantom_Menace_-_P%C3%B4ster.jpg"
                  else if(filme.title === "Revenge of the Sith")
                    imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg/250px-Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg"
                      else if (filme.title === "Return of the Jedi")
                        imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg"
                          else if (filme.title === "The Empire Strikes Back")
                            imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/5/5c/The_Empire_Strikes_Back.jpg/250px-The_Empire_Strikes_Back.jpg"
                              else if(filme.title === "The Force Awakens")
                                imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Starwars_06.jpg/250px-Starwars_06.jpg"

            return (
            <div className="card" style={{ width: "18rem" }}>
            
            <Modal textoModal={filme.episode_id}/>
              <img
                class="imagens-card"
                src={imagem}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{filme.title}</h5>
                <p className="card-text">
                  {filme.opening_crawl}
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
