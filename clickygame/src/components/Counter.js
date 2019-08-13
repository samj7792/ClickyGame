import React from "react";
// import CardBody from "./cardBody";
import cards from "../cards.json"

// class Counter extends React.Component {
//   state = {
//     cards: cards,
//     count: 0
//   };

//   handleIncrement = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   // handleDecrement = () => {
//   //   this.setState({ count: this.state.count - 1 });
//   // };

//   render () {
//     return (
//       <div>
//         {this.state.cards.map( card => (
//           <div className="card mt-4">
//             <div className="img-container">
//               <img src={card.image} className="card-img" alt={card.name} onClick={this.handleIncrement} />
//             </div>
//             <div className="content">
//               <p>Click Count: {this.state.count}</p>
//               {/* <button className="btn btn-primary" onClick={this.handleIncrement}>
//                 Increment
//               </button> */}
//             </div>
//           </div>
//         ))};
//       </div>
//     );
//   }
// }

function Counter (props) {
  return (
    <div>
      {this.state.cards.map( card => (
        <div className="card mt-4">
          <div className="img-container">
            <img src={card.image} className="card-img" alt={card.name} onClick={this.handleIncrement} />
          </div>
          <div className="content">
            <p>Click Count: {this.state.count}</p>
            {/* <button className="btn btn-primary" onClick={this.handleIncrement}>
              Increment
            </button> */}
          </div>
        </div>
      ))};
    </div>
  );
}

export default Counter;
