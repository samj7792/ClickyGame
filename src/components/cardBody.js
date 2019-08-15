import React from "react";

// class CardBody extends React.Component {
//   state = {
//     count: 0
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   // handleDecrement = () => {
//   //   this.setState({ count: this.state.count - 1 });
//   // };

//   render () {
//     return (
//       <div className="card-img-overlay">
//         <p className="card-text">Click Count: {this.state.count}</p>
//         <button className="btn btn-primary" onClick={this.state.handleIncrement}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

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
