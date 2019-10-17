import React from 'react';

export default class Modal extends React.Component{
    render(){
        return(

        <div>

        <div className="modal fade" id="ExemploModalCentralizado" tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="TituloModalCentralizado">Título do modal</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">
                    <p>{this.props.resumoFilme}</p>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="button" className="btn btn-primary">Salvar mudanças</button>
                </div>
            </div>
            </div>
        </div>
        </div>

        )
    }
        
}