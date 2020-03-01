import React, { Component } from 'react'

import './admin.css'

import 'firebase/database'
import Firebase from '../main/Firebase'

const database = Firebase.database()

const initialState = {
    list: []
}

export default class index extends Component {
    state = { ...initialState }

    componentWillMount() {
        this.getFirebasePerson() 
        document.title = 'LoCar'    
    }

    renderHeader(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">LoCar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/cadastro">Cadastro</a>
                    </li>
                    <li className="nav-item deactive">
                        <a className="nav-link disabled" href="/login">Login</a>
                    </li>
                    <li className="nav-item deactive">
                        <a className="nav-link disabled" href="/sobre">Sobre</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/admin">Admin <span class="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
                </nav>
            </React.Fragment>
        )
    }

    getFirebasePerson() {
        const ref = database.ref('person')
        ref.on('value', (snapshot) =>  {
            this.setState({ list: snapshot.val() })
        })
    }

    renderPerson(list) {
            return Object.values(list).map(person => { 
                return (
                    <React.Fragment key={person.cpf}>
                        <br/>
                            <div className="row">
                                <div className="col-md-6 align-self-end col-sd-12">
                                    <h5 className="labely">Nome:</h5>
                                    <h5 className="infoPerson">{person.name}</h5>
                                </div>
                                <div className="col-md-6 align-self-end col-sd-12">
                                    <h5 className="labely">CPF:</h5>
                                    <h5 className="infoPerson">{person.cpf}</h5>
                                </div>
                            </div>

                            <br/>
                            <div className="row">
                                <div className="col-md-6 align-self-end col-sd-12">
                                    <h5 className="labely">Email:</h5>
                                    <h5 className="infoPerson">{person.email}</h5>
                                </div>
                                <div className="col-md-6 align-self-end col-sd-12">
                                    <h5 className="labely">Telefone:</h5>
                                    <h5 className="infoPerson">{person.phone}</h5>
                                </div>
                            </div>
                                
                            <br />
                            <div className="row">
                                <div className="col-md-6 align-self-end col-sd-12">
                                    <h5 className="labely">CNH:</h5>
                                    <h5 className="infoPerson">{person.cnh}</h5>
                                </div>
                                <div className="col-md-6 align-self-end col-sd-12">
                                    <h5 className="labely">Categoria habilitada:</h5>
                                    <h5 className="infoPerson">{person.category}</h5>
                                </div>
                            </div>

                            <br />
                            <div className="row">
                                <div className="col-md-6 align-self-start col-sd-6">
                                    <h5 className="labely">Validade da cnh:</h5>
                                    <h5 className="infoPerson">{person.vality}</h5>
                                </div>
                                <div className="col-md-6 col-sd-6">
                                    <h5 className="labely">País:</h5>
                                    <h5 className="infoPerson">{person.country}</h5>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6 col-sd-6">
                                    <h5 className="labely">Estado:</h5>
                                    <h5 className="infoPerson">{person.state}</h5>
                                </div>
                                <div className="col-md-6 col-sd-6">
                                    <h5 className="labely">Cidade:</h5>
                                    <h5 className="infoPerson">{person.city}</h5>
                                </div>
                            </div>
                                
                            <br />
                            <div className="row">
                                <div className="col-md-6 col-sd-6">
                                    <h5 className="labely">Endereço:</h5>
                                    <h5 className="infoPerson">{person.address}</h5>
                                </div>      
                            </div>     
                        <hr />                       
                    </React.Fragment>
                )
            })
    }

    render() {
        return(
            <React.Fragment>
                <div className="container-fluig">
                    {this.renderHeader()}
                </div>
                <div className="container">
                    {this.renderPerson(this.state.list)}
                </div>
            </React.Fragment>
        )
    }
}