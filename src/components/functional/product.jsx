import { useContext, useEffect } from "react";
import ProductsContext from "../../context/products";

export default function Product({ onName, onCount, children, onId }) {
  const productsContext = useContext(ProductsContext);
  function condition() {
    if (onCount === 0) {
      return "zero";
    } else {
      return onCount;
    }
  }
  useEffect(() => {
    return () => {
      console.log("Product - Delete");
    };
  });
  return (
    <div>
      <span className="m-2 text-info">{onName}</span>
      <span className="m-2 badge bg-primary">{condition()}</span>
      <button onClick={incrementHandler} className="m-2 btn btn-sm btn-success">
        +
      </button>
      <button onClick={decrementHandler} className="m-2 btn btn-sm btn-warning">
        -
      </button>
      <button onClick={resetHandler} className="m-2 btn btn-sm btn-danger">
        reset
      </button>
      <button onClick={deleteHandler} className="m-2 btn btn-sm btn-danger">
        delete
      </button>
      {children}
    </div>
  );
  function incrementHandler() {
    productsContext.onIncrement(onId);
  }

  function decrementHandler() {
    productsContext.onDecrement(onId);
  }
  function resetHandler() {
    productsContext.onReset(onId);
  }
  function deleteHandler() {
    productsContext.onDelete(onId);
  }
}
