import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  getTotal() {
    let { cart } = this.props;
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].quantity;
    }
    return total;
  }

  render() {
    // let { cart } = this.props;

    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link" href="#">
                Products
              </Link>
            </li>
            <li className="nav-item" />
            <li className="nav-item">
              <Link to="/cart" className="nav-link pull-end " href="#">
                Cart {this.getTotal()}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
