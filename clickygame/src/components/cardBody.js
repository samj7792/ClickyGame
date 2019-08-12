import React from "react";

function CardBody (props) {
  // console.log(props)

  return (
    <div className="card-img-overlay">
      <p className="card-text">Click Count: {props.count}</p>
      <button className="btn btn-primary" onClick={props.handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default CardBody;
