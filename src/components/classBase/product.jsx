import { Component } from "react";
import ProductsContext from "../../context/products";

export class Product extends Component {
  static contextType = ProductsContext;
  state = {
    imgUrl: "https://picsum.photos/200",
  };
  render() {
    return (
      <div>
        <span className="m-2 text-info">{this.props.onName}</span>
        <span className="m-2 badge bg-primary">
          {this.props.onCount === 0 ? "zero" : this.props.onCount}
        </span>
        <button
          onClick={this.increment.bind(this)}
          className="m-2 btn btn-sm btn-success"
        >
          +
        </button>
        <button onClick={this.decrement} className="m-2 btn btn-sm btn-warning">
          -
        </button>
        <button
          onClick={this.handleReset}
          className="m-2 btn btn-sm btn-warning"
        >
          reset
        </button>
        <button
          onClick={() => this.context.onDelete(this.props.onId)}
          className="m-2 btn btn-sm btn-danger"
        >
          delete
        </button>
        <img
          src={this.state.imgUrl}
          style={{ borderRadius: "50%", width: "2%" }}
          alt=""
        />
        {this.props.children}
      </div>
    );
  }
  //zamani ke dar class component ha method ra ba estefade az function decleration tarif mi konid bayad dar hengame refrence dadan be on method tavasote event ha "this" ra "bind" konid
  increment() {
    this.context.onIncrement(this.props.onId);
    // this.setState({ count: count + 1 });
  }
  //zamani ke dar class component ha method ra ba estefade az arrow function tarif mi konid "this" az verasat estefade mikonad va niazi be bind mojadad on nist
  decrement = () => {
    this.context.onDecrement(this.props.onId);
    // this.setState({ count: this.props.count - 1 });
  };
  handleReset = () => {
    this.context.onReset(this.props.onId);
  };
}

export default Product;
