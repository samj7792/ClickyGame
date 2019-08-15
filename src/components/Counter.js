import React from "react";

function Counter (props) {
  return (
    <div className='col-2'>
          <div className="card mt-4">
            <div className="img-container">
              <img className="card-img" src={props.src} alt={props.alt} id={props.id} key={props.key} onClick={props.onClick} />
            </div>
      </div>
    </div>
  );
}

export default Counter;
