import React from "react";
import Header from "./components/Header";
// import Counter from "./components/Counter.js";
import Container from "./components/Container.js";
import cards from "./cards.json"

class App extends React.Component {
  state = {
    cards: cards,
    count: 0
  };

  handleIncrement = clickedid => {
    console.log(clickedid);

    let clicked = [];
    clicked = this.state.cards.filter(clicked => clicked.id === clickedid);
    clicked[0].clicked = true;
    console.log(clicked[0]);

    // this.state.cards.slice(clickedid);
    // this.state.cards.push(clicked);
    
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(this.state.cards);
    console.log(this.state.cards);
    
    this.setState({
      count: this.state.count + 1,
    });
  };

  render () {
    return (
      <div>
        <Header score={this.state.count} />
        <Container>
          <div className='row'>
            {this.state.cards.map( card => (
            <div className='col-2'>
              {/* <Counter /> */}
                  <div className="card mt-4">
                    <div className="img-container">
                      <img className="card-img" src={card.image} alt={card.name} id={card.id} key={card.id} onClick={() => this.handleIncrement(card.id)} />
                    </div>
                    {/* <div className="content">
                      <p>Click Count: {this.state.count}</p>
                      <button className="btn btn-primary" onClick={this.handleIncrement}>
                        Increment
                      </button>
                    </div> */}
              </div>
            </div>
            ))};
          </div>
        </Container>
      </div>
    );
  }
}

// function App () {
//   return (
//     <div>
//       <Header />
//       <Container>
//         <div className='row'>
//             <div className='col-2'>
//               <Counter />
//             </div>
//         </div>
//       </Container>
//     </div>
//   );
// }


export default App;
