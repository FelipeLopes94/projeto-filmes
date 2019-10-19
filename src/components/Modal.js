import React from 'react';
import App from '../App';
import Card from './Card'

class Modal extends React.Component {
    state = {  }
    render() { 
        return ( 


        <div>
            <div className="modal fade" id="ExemploModalCentralizado" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="TituloModalCentralizado">{this.props.nomeCard} </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{this.props.textoModal}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


         );
    }
}
 
export default Modal;