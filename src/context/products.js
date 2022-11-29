import { createContext } from "react";
const ProductsContext = createContext({
  products: [],
  onIncrement: () => {},
  onDecrement: () => {},
  onreset: () => {},
  onDelete: () => {},
});
export default ProductsContext;
