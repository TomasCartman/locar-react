import React, { Component } from 'react'

import './signUp.css'

import 'firebase/database'

import Firebase from '../main/Firebase'

const database = Firebase.database()

const initialState = {
    person: {
        name: '',
        cpf: '',
        email: '',
        phone: '',
        cnh: '',
        category: '',
        vality: '',
        country: '',
        state: '',
        city: '',
        address: '',
        neighborhood: '',
        number: '',
        cep: '',
        complement: '',
        reference: ''
    }, personErrors: {
        name: false,
        cpf: false,
        email: false,
        phone: false,
        cnh: false,
        category: false,
        vality: false,
        country: false,
        state: false,
        city: false,
        address: false,
        neighborhood: false,
        number: false,
        cep: false,
        complement: false,
        reference: false
    }, error: null
}

export default class SignUp extends Component {
    state = { ...initialState }

    componentWillMount() {
        document.title = 'LoCar'
    }

    updateField(event) {
        const person = { ...this.state.person }
        person[event.target.name] = event.target.value
        this.setState({ person })
    }

    renderTable() {
        return(
            <React.Fragment>
                <br/>
                <h1>Cadastro do Locatário</h1>
                <div className="form">
                <h3 className="subTitle">Dados pessoais:</h3>
                    <div className="row">
                        <div className="col-7">
                            <label>Nome:</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={this.state.person.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite seu nome completo" 
                            required />
                        </div>
                        <div className="col-5">
                            <label>CPF:</label>
                            <input type="text" className="form-control"
                            name="cpf"
                            value={this.state.person.cpf}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite somente os números"
                            maxlength="11"
                            minLength="11"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <label>Email:</label>
                            <input type="text" className="form-control"
                            name="email"
                            value={this.state.person.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite um endereço de email válido"/>
                        </div>
                        <div className="col-5">
                            <label>Telefone:</label>
                            <input type="text" className="form-control"
                            name="phone"
                            value={this.state.person.phone}
                            onChange={e => this.updateField(e)}
                            placeholder="DDD com número sem espaços"
                            maxlength="11"/>
                        </div>
                    </div>

                    <br/>
                    <h3 className="subTitle">Carteira de habilitação:</h3>
                    <div className="row">
                        <div className="col-4">
                            <label>Número de registro da CNH:</label>
                            <input type="text" className="form-control"
                            name="cnh"
                            value={this.state.person.cnh}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite somente os números"
                            maxlength="11"/>
                        </div>
                        <div className="col-4">
                            <label>Categoria habilitada:</label>
                            <select type="custom-select" className="form-control"
                                name="category"
                                value={this.state.person.category}
                                onChange={e => this.updateField(e)}>
                                <option selected value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option> 
                            </select>
                        </div>
                        <div className="col-4">
                            <label>Validade:</label>
                            <input type="date" className="form-control"
                            name="vality"
                            value={this.state.person.vality}
                            onChange={e => this.updateField(e)}
                            placeholder="dd/mm/aaaa"/>
                        </div>
                    </div>

                    <br/>
                    <h3 className="subTitle">Endereço:</h3>
                    <div className="row">
                        <div className="col-4">
                                <label>País:</label>
                                <input type="text" className="form-control"
                                name="country"
                                value={this.state.person.country}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu país"/>
                        </div>
                        <div className="col-4">
                                <label>Estado:</label>
                                <input type="text" className="form-control"
                                name="state"
                                value={this.state.person.state}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu estado"/>
                        </div>
                        <div className="col-4">
                                <label>Cidade:</label>
                                <input type="text" className="form-control"
                                name="city"
                                value={this.state.person.city}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite sua cidade"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                                <label>Endereço:</label>
                                <input type="text" className="form-control"
                                name="address"
                                value={this.state.person.address}
                                onChange={e => this.updateField(e)}
                                placeholder="Rua, avenida..."/>
                        </div>
                        <div className="col-4">
                                <label>Bairro:</label>
                                <input type="text" className="form-control"
                                name="neighborhood"
                                value={this.state.person.neighborhood}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu bairro"/>
                        </div>
                        <div className="col-4">
                                <label>Número:</label>
                                <input type="text" className="form-control"
                                name="number"
                                value={this.state.person.number}
                                onChange={e => this.updateField(e)}
                                placeholder="Número da sua residencia"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                                <label>CEP:</label>
                                <input type="text" className="form-control"
                                name="cep"
                                value={this.state.person.cep}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite somente os números"
                                maxlength="8"/>
                        </div>
                        <div className="col-4">
                                <label>Complemento:</label>
                                <input type="text" className="form-control"
                                name="complement"
                                value={this.state.person.complement}
                                onChange={e => this.updateField(e)}
                                placeholder="Exemplos: Bloco A, ap. 107"/>
                        </div>
                        <div className="col-4">
                                <label>Referência:</label>
                                <input type="text" className="form-control"
                                name="reference"
                                value={this.state.person.reference}
                                onChange={e => this.updateField(e)}
                                placeholder="Exemplo: Ao lado da Padaria Bom Dia"/>
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={() => this.save()}>
                            Cadastrar-se
                        </button>
                    </div>
                    <br/>
                </div>
            </React.Fragment>
        )
    }

    handleName() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }

        const trimedName = person.name.trim()
        if(trimedName.length === 0 ) { // Nome em branco
            personErrors.name = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
        
        if(trimedName.search(' ') === -1) { // Nome não contém espaços (Logo, não é completo)
            personErrors.name = true
            this.setState({ personErrors: personErrors })
            this.setState({ error: true })
        }
    }

    handleCpf() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedCpf = person.cpf.trim()
        if(trimedCpf.length !== 11) { // CPF inválido
            personErrors.cpf = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
        const numeredCpf = Number.parseFloat(trimedCpf)

        if(!Number.isInteger(numeredCpf)) {
            personErrors.cpf = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
        
    }

    handleEmail() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedEmail = person.email.trim()
        if(trimedEmail.search('@') === -1) { // Email inválido
            personErrors.email = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }

    handlePhone() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedPhone = person.phone.trim()
        if(trimedPhone.length !== 11) { // Telefone inválido
            personErrors.phone = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
        const numeredPhone = Number.parseFloat(trimedPhone)

        if(!Number.isInteger(numeredPhone)) {
            personErrors.phone = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }

    handleCnh() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }

        const trimedCnh = person.cnh.trim()
        if(trimedCnh.length !== 11) { // CNH inválida
            personErrors.cnh = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
        const numeredCnh = Number.parseFloat(trimedCnh)

        if(!Number.isInteger(numeredCnh)) {
            personErrors.cnh = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }

    handleVality() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedVality = person.vality.trim()
        if(trimedVality.length === 0) { // Validade em branco
            personErrors.vality = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
        const valityYear = trimedVality.slice(0, 4)
        const valityMonth = trimedVality.slice(5, 7)
        const valityDay = trimedVality.slice(8, 10)
   
        const valityDate = new Date(valityYear, valityMonth, valityDay).getTime()
        const now = Date.now()
        if(valityDate < now){
            personErrors.vality = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }

    handleCountry() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedCountry = person.country.trim()
        if(trimedCountry.length === 0) { // País em branco
            personErrors.country = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }

    handleState() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedState = person.state.trim()
        if(trimedState.length === 0) { // Estado em branco
            personErrors.state = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }
    handleCity() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedCity = person.city.trim()
        if(trimedCity.length === 0) { // Cidade em branco
            personErrors.city = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }
    handleAddress() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedAddress = person.address.trim()
        if(trimedAddress.length === 0) { // Endereço em branco
            personErrors.address = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }

    handleNeighborhood() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedNeighborhood = person.neighborhood.trim()
        if(trimedNeighborhood.length === 0) { // Bairro em branco
            personErrors.neighborhood = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }

    handleNumber() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedNumber = person.number.trim()
        if(trimedNumber.length === 0) { // Número em branco
            personErrors.number = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }

    handleCep() {
        const person = { ...this.state.person }
        const personErrors = { ...this.state.personErrors }
        
        const trimedCep = person.cep.trim()
        if(trimedCep.length !== 8) { // CEP inválido
            personErrors.cep = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
        const numeredCep = Number.parseFloat(trimedCep)

        if(!Number.isInteger(numeredCep)) {
            personErrors.cep = true
            this.setState({ personErrors })
            this.setState({ error: true })
        }
    }

    async handleSignUp() {
        this.setState({ error: null }, () => {
            this.setState({ personErrors: initialState.personErrors }, () => {
                this.handleCep()
                this.handleNumber()
                this.handleNeighborhood()
                this.handleAddress()
                this.handleCity()
                this.handleState()
                this.handleCountry()
                this.handleVality()
                this.handleCnh()
                this.handlePhone()
                this.handleEmail()
                this.handleCpf()
                this.handleName()
            })
        })

        if(this.state.error === null) this.setState({ error: false})
    }

    async save() {
        await this.handleSignUp()
        if(this.state.error === false){
            const person = { ...this.state.person }
            database.ref('person/' + person.cpf).set({
                name: person.name,
                cpf: person.cpf,
                email: person.email,
                phone: person.phone,
                cnh: person.cnh,
                category: person.category,
                vality: person.vality,
                country: person.country,
                state: person.state,
                city: person.city,
                address: person.address,
                neighborhood: person.neighborhood,
                number: person.number,
                cep: person.cep,
                complement: person.complement,
                reference: person.reference
            })
            this.setState({ person: initialState.person })
        }
    }

    renderMessage() {
        if(this.state.error === false){
            return (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Informações guardadas com sucesso!</strong>
                </div>
            )
        } else if (this.state.error === true) {
            if(this.state.personErrors.name === true) {
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no seu nome!</strong>
                    </div>
                )
            } else if(this.state.personErrors.cpf === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no seu cpf!</strong>
                    </div>
                )
            } else if(this.state.personErrors.email === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no seu email!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.phone === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no seu telefone!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.cnh === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no número da sua cnh!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.category === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado na categoria da sua cnh!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.vality === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado na validade da sua cnh!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.country === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no nome do seu país!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.state === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no nome do seu estado!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.city === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no nome da sua cidade!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.address === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no nome do seu endereço!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.neighborhood === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no nome do seu bairro!</strong>
                    </div>
                )
            }  else if(this.state.personErrors.number === true){
                return (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Há algo errado no número da sua residencia!</strong>
                    </div>
                )
            }   else if(this.state.personErrors.cep === true){
                    return (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Há algo errado no número do seu CEP!</strong>
                        </div>
                    )
            } else {
                return
            }
        }
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
        return (
            <React.Fragment>
                <div className="container-fluig">
                    {this.renderHeader()}
                </div>
                <div className="container">
                    {this.renderMessage()}
                </div>
                <div className="container">
                    {this.renderTable()}
                </div>
            </React.Fragment>
        )
    }
}