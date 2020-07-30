import React, {Component} from 'react';


class Form extends Component {
   initialState = {
        name:'',
        job:'',
        salary:'',
        allowance:'',
        isManager:''
    }
    state = this.initialState;

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render(){
        const {name, job, salary, allowance, isManager} = this.state;
        return(
            <form >
                <label htmlfor="name">Name</label>
                <input required type="text" name="name" id="name" value={name} onChange={this.handleInput}/>
                <label htmlfor="job">Job</label>
                <input required type="text" name="job" id="job" value={job} onChange={this.handleInput}/>
                <label htmlfor="salary">Salary</label>
                <input required type="text" name="salary" id="salary" value={salary} onChange={this.handleInput}/>
                <label htmlfor="allowance">Allowance</label>
                <input required type="text" name="allowance" id="allowance" value={allowance} onChange={this.handleInput}/>
                <label htmlfor="isManager">IsManager</label>
                <input required type="text" name="isManager" id="isManager" value={isManager} onChange={this.handleInput}/>
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form;

