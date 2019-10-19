import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner'


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
    if (this.state.filmes === undefined) return  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>

    let imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/P%C3%B4ster_Star_Wars.jpg/250px-P%C3%B4ster_Star_Wars.jpg"
    let historia = "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."
    let hrefCollapse = "#filme1"
    let idCollapse = "filme1"

    return (
      <div class="corpo-cards">
      
        {this.state.filmes.map(filme => {

           if (filme.title === "Attack of the Clones"){
              imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/6/63/Star_Wars_The_Clone_Wars.jpg/250px-Star_Wars_The_Clone_Wars.jpg";
                historia = this.state.filmes[1].opening_crawl
                  hrefCollapse = "#filme2"
                    idCollapse = "filme2"

              }
               else if (filme.title === "The Phantom Menace"){
                imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/0/05/Star_Wars_Phantom_Menace_-_P%C3%B4ster.jpg/250px-Star_Wars_Phantom_Menace_-_P%C3%B4ster.jpg";
                  historia = this.state.filmes[2].opening_crawl
                    hrefCollapse = "#filme3"
                      idCollapse = "filme3"
               }
                  else if(filme.title === "Revenge of the Sith"){
                    imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg/250px-Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg";
                      historia = this.state.filmes[3].opening_crawl
                        hrefCollapse = "#filme4"
                          idCollapse = "filme4"

                  }
                      else if (filme.title === "Return of the Jedi"){
                        imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg";
                          historia = this.state.filmes[4].opening_crawl
                            hrefCollapse = "#filme5"
                              idCollapse = "filme5"
                      }
                          else if (filme.title === "The Empire Strikes Back"){
                            imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/5/5c/The_Empire_Strikes_Back.jpg/250px-The_Empire_Strikes_Back.jpg";
                              historia = this.state.filmes[5].opening_crawl
                                hrefCollapse = "#filme6"
                                  idCollapse = "filme6"

                          }
                              else if(filme.title === "The Force Awakens"){
                                imagem = "https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Starwars_06.jpg/250px-Starwars_06.jpg";
                                  historia = this.state.filmes[6].opening_crawl
                                    hrefCollapse = "#filme7"
                                      idCollapse = "filme7"

                              }

        return (
          <div className="card" style={{ width: "18rem" }}>
            
              <img
                class="imagens-card"
                src={imagem}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Star Wars {filme.title}</h5>
                <p className="card-text">
                  Diretor: {filme.director}
                </p>
              </div>
              <div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Data de lancamento: {filme.release_date}</li>
                  <li class="list-group-item">Produtor: {filme.producer}</li>
                  <li class="list-group-item">Episodio da franquia: {filme.episode_id}</li>
                </ul>
              </div>
             
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target={hrefCollapse}>Historia do Filme</button>     

                <div>
                  <div className="modal fade" id={idCollapse} tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                          <div className="modal-content">
                              <div className="modal-header">

                                  <h5 className="modal-title" id="TituloModalCentralizado" class="title-modal"> Star Wars {filme.title} </h5>

                                  <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                      <span aria-hidden="true">×</span>
                                  </button>
                              </div>
                              <div className="modal-body">
                                  <p >{historia}</p>
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
                              </div>
                          </div>
                      </div>
                  </div>
               </div>

            </div>   
          );

        })}
      </div>
    );
  }
}



export default Card;
