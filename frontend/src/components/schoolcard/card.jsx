import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
        <h3 className="info"> Fees = {props.fees} </h3> 
        <h3 className="info"> Type = {props.type} </h3>
        <h3 className="info"> Board = {props.board} </h3>
        <h3 className="info"> Grade = {props.grade} </h3>
        <h3 className="address"> {props.add}</h3>

      </div>
    </div>
    </div>
  );
}

export default Card;
