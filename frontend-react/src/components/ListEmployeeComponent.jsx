import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee() {
        window.location.href = '/add-employee';
    }

    editEmployee(id) {
        window.location.href = `/update-employee/${id}`;
    }

    viewEmployee(id) {
        window.location.href = `/view-employee/${id}`;
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Lista de Funcionários</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Primeiro Nome </th>
                                <th> Último Nome </th>
                                <th> Email </th>
                                <th> Ações </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>  {employee.firstName} </td>
                                        <td>  {employee.lastName}  </td>
                                        <td>  {employee.emailId}   </td>
                                        <td>
                                            <button onClick={() => this.editEmployee(employee.id)} className='btn btn-info'>Atualizar</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteEmployee(employee.id)} className='btn btn-danger'>Remover</button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.viewEmployee(employee.id)} className='btn btn-info'>Visualizar</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Adicionar Funcionário</button>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;