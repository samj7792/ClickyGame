import React from "react";

function Counter (props) {
  return (
    <div className='col-md-2 col-sm-3 col-4'>
      <div className="card mt-4">
        <div className="img-container">
          <img className="card-img" src={props.src} alt={props.alt} id={props.id} onClick={props.onClick} />
        </div>
      </div>
    </div>
  );
}

export default Counter;
