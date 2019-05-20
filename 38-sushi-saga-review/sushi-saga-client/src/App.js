import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushi: [],
    renderedSushi: [],
    eatenSushi: [],
    budget: 100
  };

  componentDidMount() {
    this.getSushi()
      .then(sushi => this.setState({ allSushi: sushi }))
      .then(() => this.get4Sushi());
  }

  storeEatenSushi = sushi => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      budget: this.state.budget - sushi.price
    });
  };
  getSushi = () => {
    return fetch(API).then(resp => resp.json());
  };

  get4Sushi = () => {
    this.setState({
      renderedSushi: this.state.allSushi.slice(0, 4),
      allSushi: this.state.allSushi.slice(4)
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          get4Sushi={this.get4Sushi}
          fourSushi={this.state.renderedSushi}
          storeEatenSushi={this.storeEatenSushi}
          budget={this.state.budget}
        />
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;
