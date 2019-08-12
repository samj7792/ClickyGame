import React from "react";
// import CardBody from "./cardBody";

// class Counter extends React.Component {
//   state = {
//     count: 0
//   };

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  // handleDecrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  // render(props) {
  //   console.log(props);
  //   return (
  //     <div className="card">
  //       <div className="img-container">
  //         <img src={props.image} className="card-img" alt={props.name} />
  //       </div>
  //       <div className="content">
  //         <p>Click Count: {this.state.count}</p>
  //         <button className="btn btn-primary" onClick={this.handleIncrement}>
  //           Increment
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
// }

function Counter (props) {
  return (
    <div className="card mt-4">
      <div className="img-container">
        <img src={props.image} className="card-img" alt={props.name} />
      </div>
      <div className="content">
        {/* <p>Click Count: {this.state.count}</p> */}
        {/* <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment
        </button> */}
      </div>
    </div>
  );
}

export default Counter;
