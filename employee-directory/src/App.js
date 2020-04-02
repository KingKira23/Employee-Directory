import React, { Component } from 'react';
import EmployeeCard from "./components/EmployeeCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import employee from "./employee.json"


class App extends Component {
  state = {
    employee
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employee.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
