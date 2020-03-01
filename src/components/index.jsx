import React, { Component } from 'react'

import 'firebase/database'

export default class index extends Component {
    state = {  }

    componentWillMount(){
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
                        <a className="nav-link" href="/cadastro">Cadastro <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item deactive">
                        <a className="nav-link disabled" href="/login">Login</a>
                    </li>
                    <li className="nav-item deactive">
                        <a className="nav-link disabled" href="/sobre">Sobre</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/admin">Admin</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </React.Fragment>
        )
    }

    renderMain() {
        return(
            <React.Fragment>
                <br/>
                <h3>Login:</h3>
                <div className="form">
                    <div className="col-10">
                        <div className="row">
                            <label>Email:</label>
                            <input type="text" className="form-control"
                                name="email"
                                placeholder="Digite seu email" 
                                required />
                        </div>
                        <div className="row">
                            <label>CPF:</label>
                            <input type="text" className="form-control"
                                name="cpf"
                                placeholder="Digite somente os números"/>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-end">
                        <button className="btn btn-primary">
                            Entrar
                        </button>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        return(
            <React.Fragment>
                <div className="container-fluig">
                    {this.renderHeader()}
                </div>
                <div className="container">
                    {this.renderMain()}
                </div>
            </React.Fragment>
        )
    }
}