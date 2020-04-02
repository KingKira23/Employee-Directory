import React, { Component } from "react"
import API from "../../utils/API"
import EmployeeCard from "../EmployeeCard"

class Results extends Component {
    state = {
        results: [],
        search: ""
    };

    componentDidMount() {
        this.employees()
    };

    employees = () => {
        API.getUsers()
            .then(res => {
                this.setState(

                    { result: res.data.results }
                )
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div>
                {this.state.results.map(employee => (

                    <EmployeeCard
                        id={employee.id.value}
                        key={employee.id.value}
                        title={employee.name.title} 
                        first={employee.name.first}
                        last={employee.name.last}
                        image={employee.pictue.medium}
                        gender={employee.gender}
                        email={employee.email}
                        city={employee.location.city}
                        state={employee.location.state}
                        age={employee.dob.age}
                        cell={employee.cell}
                    />
                ))}
            </div>
        );
    }
}

export default Results;