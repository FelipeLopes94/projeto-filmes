import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from './Modal';

export const infos = "Batata";

export default class Card extends React.Component{
    render(){
        return(
        <div className="card" style={{width: '18rem'}}>
            <img class="imagens-card" src={this.props.linkImagem} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.props.nomeCard}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <Button type="submit" data-toggle="modal" data-target="#ExemploModalCentralizado">Resumo do Filme</Button>
        </div>
        )
    }
}