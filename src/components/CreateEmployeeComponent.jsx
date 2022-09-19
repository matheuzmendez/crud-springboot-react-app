import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.saveEmployee = this.saveEmployee.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        
        EmployeeService.createEmployee(employee).then(res => {
            window.location.href = '/employees';
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel() {
        window.location.href = '/employees';
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div style={{marginTop: "100px"}} className='card col-md-6 offsett-md-3 offset-md-3'>
                            <h3 style={{marginTop: "50px"}} className='text-center'>Adicionar Funcionário</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label style={{marginTop: "10px"}}>Primeiro Nome:</label>
                                        <input style={{marginTop: "10px"}} placeholder='Primeiro Nome' name="firstName" className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label style={{marginTop: "10px"}}>Último Nome:</label>
                                        <input style={{marginTop: "10px"}} placeholder='Último Nome' name="lastName" className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label style={{marginTop: "10px"}}>Endereço de Email:</label>
                                        <input style={{marginTop: "10px"}} placeholder='Endereço de Email' name="emailId" className='form-control'
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>                                    
                                </form>
                                <button style={{marginTop: "10px"}} className='btn btn-success' onClick={this.saveEmployee}>Salvar</button>
                                <button style={{marginTop: "10px", marginLeft: '10px'}} className='btn btn-danger' onClick={this.cancel}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;