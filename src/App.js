import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter.js";
import cards from "./cards.json";
import WinLossModal from "./components/WinLossModal.js";
import InstructionsModal from "./components/InstructionsModal";

class App extends React.Component {
  state = {
    cards: cards,
    count: 0,
    wins: 0,
    losses: 0,
    instructionModal: true,
    showModal: false,
    winModal: false,
    lossModal: false,
  };

  // Close modal function
  close = () => {
    this.setState({
      instructionModal: false,
      showModal: false,
      winModal: false,
      lossModal: false,
    });
  };

  // Open modal function
  open = () => {
    // event.preventDefault();
    this.setState({
      showModal: true,
    });
  };

  handleIncrement = (clickedid) => {
    let clicked = [];
    clicked = this.state.cards.filter((clicked) => clicked.id === clickedid);

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    if (!clicked[0].clicked) {
      clicked[0].clicked = true;

      shuffle(this.state.cards);

      this.setState({
        count: this.state.count + 1,
      });

      if (this.state.count > 10) {
        for (let i = 0; i < cards.length; i++) {
          cards[i].clicked = false;
        }
        this.setState({
          cards: cards,
          count: 0,
          wins: this.state.wins + 1,
          winModal: true,
        });
        this.open();
      }
    } else {
      shuffle(this.state.cards);

      for (let i = 0; i < cards.length; i++) {
        cards[i].clicked = false;
      }

      this.setState({
        cards: cards,
        count: 0,
        losses: this.state.losses + 1,
        lossModal: true,
      });
      this.open();
    }
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Header
          score={this.state.count}
          wins={this.state.wins}
          losses={this.state.losses}
        />
        <div className='container'>
          <div className='row'>
            {this.state.cards.map((card) => (
              <Counter
                src={card.image}
                alt={card.name}
                id={card.id}
                key={card.id}
                onClick={() => this.handleIncrement(card.id)}
              />
            ))}
          </div>
          <InstructionsModal
            show={this.state.instructionModal}
            onHide={this.close}
          />
          <WinLossModal
            show={this.state.showModal}
            onHide={this.close}
            onClick={this.close}
            win={this.state.winModal}
            loss={this.state.lossModal}
          />
        </div>
      </>
    );
  }
}

export default App;
