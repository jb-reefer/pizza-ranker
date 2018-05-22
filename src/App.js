import React, { Component } from 'react';
import './App.css';

import { findFrequencies } from './PizzaProcessor';

class App extends Component {
  state = { 
    pizzas: undefined,
    err: undefined,
  };

  componentWillMount() {
    fetch('http://files.olo.com/pizzas.json')
      .then(request => request.json())
      .then((data) => {
        console.log('is setSTate defined?', this.setState);
        this.setState({
          pizzas: findFrequencies(data),
        });
      })
      .catch((fetchError) => {
        this.setState({
          err: fetchError,
        });
      });
  }

  render() {
    if (this.state.pizzas) {
      return (
        <div>
          { !this.state.err ? <Pizzas pizzas={this.state.pizzas} /> : <div>{this.state.err.message}</div>}
        </div>
      );
    }

    return (
      <div>Loading</div>
    );
  }
}

const Pizzas = props => (
  props.pizzas.map((pizza, idx) => (<div key={idx}>Rank: {idx} {pizza.toppings} : {pizza.orderCount}</div>))
);

export default App;
