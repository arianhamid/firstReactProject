import { Component } from "react";
import Navbar from "./components/classBase/navbar";
import Products from "./components/classBase/products";
import ProductsContext from "./context/products";

export default class App extends Component {
  state = {
    products: [
      { id: 1, productName: "laptop", count: 3 },
      { id: 2, productName: "phone", count: 4 },
      { id: 3, productName: "airpods", count: 7 },
    ],
  };
  render() {
    return (
      <>
        <ProductsContext.Provider
          value={{
            products: this.state.products,
            onIncrement: this.handleIncrement,
            onDecrement: this.handleDecrement,
            onReset: this.handleReset,
            onDelete: this.handleDelete,
          }}
        >
          <Navbar />
          <Products />
        </ProductsContext.Provider>
      </>
    );
  }
  //ravesh aval taghire value ha dar state
  handleIncrement = (id) => {
    const newProducts = this.state.products.map((p) => {
      if (p.id === id) {
        p.count += 1;
      }
      return p;
    });
    this.setState({ products: newProducts });
  };
  //ravesh dovom taghire value ha dar state
  handleDecrement = (id) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === id);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };
  handleDelete = (id) => {
    const newProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: newProducts });
  };
  handleReset = (id) => {
    const newProducts = this.state.products.map((p) => {
      if (p.id === id) {
        p.count = 0;
      }
      return p;
    });
    this.setState({ products: newProducts });
    console.log(newProducts);
  };
}
