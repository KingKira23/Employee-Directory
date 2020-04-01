import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {

  }

  reder() {
    return (
      <Wrapper>
        <title>Employee List</title>
        {this.state.employee.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
