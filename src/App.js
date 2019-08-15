import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter.js";
import Container from "./components/Container.js";
import cards from "./cards.json"

class App extends React.Component {
  state = {
    cards: cards,
    count: 0,
    wins: 0,
    losses: 0
  };

  handleIncrement = clickedid => {
    // console.log(clickedid);

    // console.log(cards);
    
    let clicked = [];
    clicked = this.state.cards.filter(clicked => clicked.id === clickedid);
    
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    
    if(!clicked[0].clicked){
      clicked[0].clicked = true;
      console.log(clicked[0]);
      
      shuffle(this.state.cards);
      console.log(this.state.cards);
      
      this.setState({
        count: this.state.count + 1,
      });
      if(this.state.count > 10) {
        for (let i = 0; i < cards.length; i ++) {
          cards[i].clicked = false
        }
        this.setState({
          cards: cards,
          count: 0,
          wins: this.state.wins + 1
        })
      }
    } else {
      shuffle(this.state.cards);

      for (let i = 0; i < cards.length; i ++) {
        cards[i].clicked = false
      }

      this.setState({
        cards: cards,
        count: 0,
        losses: this.state.losses + 1
      });
    };
  };

  render () {
    return (
      <div>
        <Header score={this.state.count} wins={this.state.wins} losses={this.state.losses} />
        <Container>
          <div className='row'>
            {this.state.cards.map( card => (
              <Counter
                src={card.image}
                alt={card.name}
                id={card.id}
                key={card.id}
                onClick={() => this.handleIncrement(card.id)}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
