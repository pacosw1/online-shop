import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class ItemView extends Component {
  render() {
    const style = {
      backgroundColor: "black"
    };

    let { item, addToCart, onSelect } = this.props;

    return (
      <React.Fragment>
        <img
          className="img-fluid"
          src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/w_1164,c_limit/iphonex-TA.jpg"
        >
          {item.picture}
        </img>
        <div style={{ marginTop: "1.1rem", marginBottom: "2.1rem" }}>
          <Link to="/productpage">
            <h5
              onClick={() => onSelect(item.id)}
              style={{ fontSize: "1rem", color: "black" }}
            >
              {item.title}
            </h5>
          </Link>
          <span style={{ fontSize: ".84rem" }}>${item.price}</span>
          <p style={{ fontSize: ".84rem" }}>{item.description}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemView;
