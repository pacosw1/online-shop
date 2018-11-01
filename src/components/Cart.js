import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { cart, onDeleteItem } = this.props;
    const list = cart.map(item => {
      return (
        <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.rating}</p>
          <button className="btn btn-primary">Qty: {item.quantity} </button>
          <button
            className="btn btn-primary"
            onClick={() => onDeleteItem(item.id)}
          >
            Remove from Cart
          </button>
          <button className="btn btn-primary">Proceed to Checkout </button>
        </li>
      );
    });
    return (
      <React.Fragment>
        <h1>Cart ({cart.length})</h1>
        <ul>{list}</ul>
      </React.Fragment>
    );
  }
}

export default Cart;
