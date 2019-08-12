import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter.js";
import cards from "./cards.json";

console.log(cards);

class App extends React.Component {
  state = {
    cards
  };

  

  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
            {this.state.cards.map( card => (
              <div className='col-3'>
                <Counter 
                  image={card.image} 
                  name={card.name} 
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
