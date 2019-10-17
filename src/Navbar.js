import  React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


export default class NavBar extends React.Component{
    render(){
        return(
        <nav >
            <p class="titulo-navbar">
                Filmes Star Wars
            </p>
        </nav>
        )
    }
}