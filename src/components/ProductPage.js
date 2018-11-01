import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductPage extends Component {
  render() {
    let { selected, addToCart } = this.props;

    return (
      <React.Fragment>
        <div className="row headContent">
          <div className="col-12 test space ">
            <Link to="/products">Back</Link>
          </div>
        </div>
        <div className="row headContent">
          <div className="col-sm-12 col-md-6 test space ">
            <img
              className="img-fluid"
              src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/w_1164,c_limit/iphonex-TA.jpg"
            />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 test space">
            <div className="info">
              <h4>{selected.title}</h4>
              <p>${selected.price}</p>
              <button
                onClick={() => addToCart(selected.id)}
                className="btn btn-outline-primary"
              >
                Add to Cart
              </button>
              <p>{selected.description}</p>
            </div>
          </div>
        </div>
        <div className="row headContent">
          <div className="col-12 test" />
        </div>
      </React.Fragment>
    );
  }
}

export default ProductPage;
