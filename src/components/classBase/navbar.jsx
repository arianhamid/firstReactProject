import React, { Component } from "react";
import ProductContext from "../../context/products";

export default class Navbar extends Component {
  static contextType = ProductContext;
  constructor(props) {
    super(props);
    console.log("Navbar - Constructor");
  }
  componentDidMount() {
    console.log("Navbar - componentDidMount");
  }
  componentDidUpdate() {
    console.log("Navbar - componentDidUpdate");
  }
  render() {
    console.log("Navbar - render");
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
