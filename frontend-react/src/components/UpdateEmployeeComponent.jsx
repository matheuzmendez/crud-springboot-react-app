import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {id: window.location.href.match(/(?:[/]\d+)/g).toString().substring(1),
            firstName: '',
            lastName: '',
            emailId: ''
        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }
    
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
            window.location.href = '/employees';
        })
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
                        <div style={{marginTop:"100px"}} className='card col-md-6 offsett-md-3 offset-md-3'>
                            <h3 style={{marginTop:"20px"}} className='text-center'>Atualizar Funcionário</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label style={{marginTop:"10px"}}>Primeiro Nome:</label>
                                        <input style={{marginTop:"10px"}} placeholder='Primeiro Nome' name="firstName" className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label style={{marginTop:"10px"}}>Último Nome:</label>
                                        <input style={{marginTop:"10px"}} placeholder='Último Nome' name="lastName" className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label style={{marginTop:"10px"}}>Endereço de Email:</label>
                                        <input style={{marginTop:"10px"}} placeholder='Endereço de Email' name="emailId" className='form-control'
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>                                    
                                </form>
                                <button style={{marginTop:"10px"}} className='btn btn-success' onClick={this.updateEmployee}>Salvar</button>
                                <button style={{marginTop:"10px", marginLeft: '10px'}} className='btn btn-danger' onClick={this.cancel}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;