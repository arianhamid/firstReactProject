import ProductsContext from "../../context/products";
import { useContext } from "react";

export default function Navbar() {
  const productsContext = useContext(ProductsContext);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <p className="bavbar-brand">
          Navbar {computeSum()}
          {}
        </p>
      </nav>
    </>
  );
  function computeSum() {
    const sum = productsContext.products.reduce((sum, p) => {
      sum += p.count;
      return sum;
    }, 0);
    return sum;
  }
}
