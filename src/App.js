import React, { Component } from 'react';
import EmployeeData from './EmployeeTable/EmployeeData';

class App extends Component {
    initialstate = {
        isemployee:false , isticktacktoe: false
    }
    state = this.initialstate;

    handleChoose = (event) => {

    }
    render() { 
        const {isemployee, isticktacktoe} = this.state;
        return ( 
            <div className ="chooseContainer">
                <input type= "button" name= "isemployee" value= "Employee Data" onClick= {()=>this.setState({isemployee:true})} />
                <input type= "button" name= "isticktacktoe" value= "Tick Tack Toe" onClick= {()=>this.setState({isemployee:true})} />
                {isemployee && <EmployeeData/>}
            </div> 
        );
    }
}
 
export default App;
