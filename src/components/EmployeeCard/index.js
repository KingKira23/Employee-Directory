import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.title}{props.first}{props.last}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
          <li>
            <strong>Gender:</strong> {props.gender}
          </li>
          <li>
            <strong>Location:</strong> {props.city},{props.state}
          </li>
          <li>
            <strong>email:</strong> {props.email}
          </li>
          <li>
            <strong>Phone:</strong> {props.cell}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
