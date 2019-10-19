import React from 'react';
import App from '../App';
import Card from '../components/Card'

class Modal extends React.Component {
    
    state = {  }
    
    render() { 

        console.log('lista historias', this.props.idModal)   
        return ( 


        <div>
            <div className="modal fade" id={this.props.idCollapse} tabIndex={-1} role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="TituloModalCentralizado">batata </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{this.props.historia}</p>
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