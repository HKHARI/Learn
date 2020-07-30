import React, {Component} from 'react';
import './App.css';
import Table from './learn/Table';
import Form from './learn/Form';


class App extends Component {

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
      <div className="container">
        <h1>Employee Details</h1>
        <Table employeeData={employee} removeEmployee={this.removeEmployee}/>
        <Form handleSubmit ={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;

