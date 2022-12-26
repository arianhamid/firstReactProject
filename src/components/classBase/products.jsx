import { Component } from "react";
import Product from "./product";
import ProductsContext from "../../context/products";

export default class Products extends Component {
  constructor(props) {
    super(props);
    console.log("Products - Constructor");
  }
  componentDidMount() {
    console.log("Products - componentDidMount");
  }
  componentDidUpdate() {
    console.log("Products - componentDidUpdate");
  }
  static contextType = ProductsContext;
  render() {
    console.log("Products - render");
    return (
      <>
        {this.context.products.map((p, i) => {
          return (
            <Product
              key={i}
              onId={p.id}
              onName={p.productName}
              onCount={p.count}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                iusto!
              </p>
            </Product>
          );
        })}
      </>
    );
  }
}
