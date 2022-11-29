import Product from "./product";
import { useContext } from "react";
import ProductsContext from "../../context/products";

export default function Products(props) {
  const productsContext = useContext(ProductsContext);
  return (
    <div>
      {productsContext.products.map((p, i) => {
        return (
          <Product key={i} onId={p.id} onName={p.productName} onCount={p.count}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              natus!
            </p>
          </Product>
        );
      })}
    </div>
  );
}
