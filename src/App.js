import React, { Component } from 'react';
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import Results from './components/Directory';
import EmployeeCard from './components/EmployeeCard';

class App extends Component {
  state = {
    // employee
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
          <Results />
          <EmployeeCard/>
      </Wrapper>
    );
  }
}

export default App;
