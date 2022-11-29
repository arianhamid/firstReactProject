import { Component } from "react";
import Product from "./product";
import ProductsContext from "../../context/products";

export default class Products extends Component {
  static contextType = ProductsContext;
  render() {
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
