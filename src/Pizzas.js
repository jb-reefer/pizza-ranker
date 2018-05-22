import React from 'react';
import { Card } from 'semantic-ui-react';
import './Pizzas.css';

const Pizzas = props => (
  <div className="card-group">
    <Card.Group centered stackable>
      {
        props.pizzas.map((pizza, idx) => <PizzaCard key={pizza.toppings} rank={idx} pizza={pizza} />)
      }
    </Card.Group>
  </div>
);

const PizzaCard = ({ rank, pizza }) => (
  <Card>
    <Card.Content>
      <Card.Header>Rank: #{rank + 1}</Card.Header>
      <Card.Meta>Order Count: {pizza.orderCount}</Card.Meta>
      <Card.Description>Toppings: {pizza.toppings}</Card.Description>
    </Card.Content>
  </Card>
);

export { Pizzas };
