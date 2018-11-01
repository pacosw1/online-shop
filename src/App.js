import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ItemDisplay from "./components/ItemDisplay";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ItemView from "./components/ItemView";
import ProductPage from "./components/ProductPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.state = {
      items: items,
      cart: [],
      selected: {}
    };
  }
  render() {
    let { cart, selected } = this.state;
    return (
      <React.Fragment>
        <NavBar cart={cart} />

        <div style={{ textAlign: "center" }} className="container">
          <Switch>
            <Route
              path="/products"
              render={() => (
                <ItemDisplay
                  onSelect={this.onSelect}
                  items={this.state.items}
                  addToCart={this.addToCart}
                />
              )}
            />

            <Route
              path="/productpage"
              render={() => (
                <ProductPage addToCart={this.addToCart} selected={selected} />
              )}
            />
            <Route path="/cart" render={() => <Cart cart={cart} />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }

  //Event Handlers and other Methods
  onSelect(id) {
    let { items } = this.state;
    this.setState({
      selected: items.find(x => x.id === id)
    });
  }

  addToCart(id) {
    let { cart, items } = this.state;

    var newCart = [...cart].slice(0);

    const repeat = newCart.find(x => x.id === id);
    console.log("found", repeat);
    if (repeat !== undefined) {
      console.log("item already exists");
      repeat.quantity += 1;
      this.setState({
        cart: newCart
      });
    } else {
      const item = items.find(x => x.id === id);
      item.quantity = 1;
      newCart.push(item);

      console.log(newCart);
      this.setState({
        cart: newCart
      });
    }
  }

  onDeleteItem(id) {
    let { cart } = this.state;
    const updated = cart.filter(x => x.id !== id);
    this.setState({
      cart: updated
    });
  }
}

export default App;

var items = [
  {
    stock: 20,
    id: "1",
    title: "Golden Ring Necklace",
    description: "XS",
    price: 100,
    category: "god",
    rating: 4
  },
  {
    stock: 20,
    id: "2",
    title: "Diamond Ring Necklace",
    description: "M",
    price: 100,
    category: "god",
    rating: 4
  },
  {
    stock: 20,
    id: "3",
    title: "Silver Ring Necklace",
    description: "L",
    price: 100,
    category: "god",
    rating: 4
  },
  {
    stock: 20,
    id: "4",
    title: "sancho",
    description: "XS",
    price: 100,
    category: "god",
    rating: 4
  },
  {
    stock: 20,
    id: "5",
    title: "paco",
    description: "very nice",
    price: 100,
    category: "god",
    rating: 4
  },
  {
    stock: 20,
    id: "6",
    title: "julian",
    description: "very nice",
    price: 100,
    category: "god",
    rating: 4
  }
];
