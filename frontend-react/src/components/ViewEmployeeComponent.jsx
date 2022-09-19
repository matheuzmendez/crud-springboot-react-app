import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: window.location.href.match(/(?:[/]\d+)/g).toString().substring(1),
            employee: {}
        }

        this.backToList = this.backToList.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({employee: res.data});
        });
    }

    backToList() {
        window.location.href = '/employees';
    }

    render() {
        return (
            <div>
                <div style={{marginTop:"100px"}} className='card col-md-6 offset-md-3'>
                    <h3 style={{marginTop:"20px"}} className='text-center'> Visualizar Funcionário </h3>
                    <div className='card-body'>
                        <div style={{marginTop:"10px"}}className='row'>
                            <h5>Primeiro Nome do Funcionário:</h5>
                            <div> {this.state.employee.firstName} </div>
                        </div>
                        <div style={{marginTop:"10px"}}className='row'>
                            <h5>Último Nome do Funcionário:</h5>
                            <div> {this.state.employee.lastName} </div>
                        </div>
                        <div style={{marginTop:"10px"}}className='row'>
                            <h5>Email do Funcionário:</h5>
                            <div> {this.state.employee.emailId} </div>
                        </div>
                    </div>
                </div>
                <div><button style={{marginLeft:"325px", marginTop:"10px"}} onClick={() => this.backToList()} className='btn btn-info'>Voltar</button></div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;