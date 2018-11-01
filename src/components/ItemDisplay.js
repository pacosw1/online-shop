import React, { Component } from "react";
import ItemView from "./ItemView";

class ItemDisplay extends Component {
  render() {
    let { items, onSelect, addToCart } = this.props;
    const list = items.map(item => {
      return (
        <div
          style={{ display: "inline-block", textAlign: "left" }}
          className="col-xs-12 col-sm-6 col-md-4 col-lg-3 box"
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block", textAlign: "left" }}>
              <ItemView addToCart={addToCart} onSelect={onSelect} item={item} />
            </div>
          </div>
        </div>
      );
    });
    return (
      <React.Fragment>
        <h2 style={{ textAlign: "left", margin: "2rem 0rem" }}>Catalog</h2>
        <div style={{ margin: "3rem 0rem 5rem" }} className="row">
          {list}
        </div>
      </React.Fragment>
    );
  }
}

export default ItemDisplay;
