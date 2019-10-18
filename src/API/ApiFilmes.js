import React from "react"
import axios from "axios";
import Button from 'react-bootstrap/Button';


class API extends React.Component {
    componentDidMount() {
        axios.get(`https://swapi.co/api/films/`)
          .then(res => {
            const filme = res.data;
            this.setState({ filme });
            console.log('Lista de filmes', this.state.filme);
          })
      }
    
      render() {
        return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img className="imagens-card" src={this.props.linkImagem} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.nomeCard}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <Button type="submit" data-toggle="modal" data-target="#ExemploModalCentralizado">Resumo do Filme</Button>
            </div>
        </div>
        );
      }
    }
    
export default API;