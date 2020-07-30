import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';


class EmployeeData extends Component {

  state = {
    employee: []
  }

  handleSubmit = (employee) => {
    this.setState({employee:[...this.state.employee,employee]})
  }

  removeEmployee = (index) => {
    const {employee} = this.state;
    this.setState({employee : employee.filter((emp,i) => i !== index)});
  }

  render(){
    const {employee} = this.state;
    return (
      <div className="employeeContainer">
        <h1>Employee Details</h1>
        <Table employeeData={employee} removeEmployee={this.removeEmployee}/>
        <Form handleSubmit ={this.handleSubmit}/>
      </div>
    );
  }
}

export default EmployeeData;

