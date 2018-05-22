import React, { Component } from 'react';
import { Modal, Header, Icon } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

import { findFrequencies } from './PizzaProcessor';
import { Pizzas } from './Pizzas';

class App extends Component {
  state = {
    pizzas: undefined,
    err: undefined,
  };

  componentWillMount() {
    fetch('http://files.olo.com/pizzas.json')
      .then(request => request.json())
      .then((data) => {
        this.setState({
          // Only take the top 20, which we do here because it's display logic
          pizzas: findFrequencies(data).slice(0, 20),
        });
      })
      .catch((fetchError) => {
        this.setState({
          err: fetchError,
        });
      });
  }

  render() {
    if (this.state.err) {
      return (
        <Modal open>
          <Modal.Header>Error</Modal.Header>
          <Modal.Content>
            {this.state.err.message}
          </Modal.Content>
        </Modal>
      );
    }
    if (this.state.pizzas) {
      return (
        <div>
          <Header as='h2' icon textAlign='center'>
            <Icon name='food' circular />
            <Header.Content>
              20 Most Popular Combos
              </Header.Content>
          </Header>
          <hr />
          <Pizzas pizzas={this.state.pizzas} />
        </div>
      );
    }

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Loading order data...</h1>
        <p className="App-intro">
          Please hold.
      </p>
      </div>
    );
  }
}


export { App };
