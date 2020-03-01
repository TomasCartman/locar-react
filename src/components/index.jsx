import React, { Component } from 'react'

import './signUp.css'

import 'firebase/database'

import Firebase from '../main/Firebase'

const database = Firebase.database()

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


    render() {
        return(
            <React.Fragment>
                <div className="container-fluig">
                    {this.renderHeader()}
                </div>
            </React.Fragment>
        )
    }
}