import React, { Component } from "react";
import ProductContext from "../../context/products";

export default class Navbar extends Component {
  static contextType = ProductContext;
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">navbar {this.computeSum()}</p>
        </div>
      </nav>
    );
  }
  computeSum = () => {
    let sum = 0;
    this.context.products.forEach((p) => {
      sum += p.count;
    });
    return sum;
  };
}
