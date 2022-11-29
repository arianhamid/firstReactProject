import Products from "./components/functional/products";
import Navbar from "./components/functional/navbar";
import { useState } from "react";
import ProductsContext from "./context/products";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, productName: "laptop", count: 3 },
    { id: 2, productName: "phone", count: 13 },
    { id: 3, productName: "airpods", count: 20 },
  ]);

  return (
    <>
      {
        <ProductsContext.Provider
          value={{
            products: products,
            onIncrement: handleIncrement,
            onDecrement: handleDecrement,
            onReset: handleReset,
            onDelete: handleDelete,
          }}
        >
          <Navbar />
          <Products />
        </ProductsContext.Provider>
      }
    </>
  );
  //ba estefade az method map
  function handleIncrement(id) {
    const newProducts = products.map((p) => {
      if (p.id === id) {
        p.count += 1;
      }
      return p;
    });
    setProducts(newProducts);
  }
  //ba estefade az method findIndex
  function handleDecrement(id) {
    const newProducts = [...products];
    const index = products.findIndex((p) => p.id === id);
    newProducts[index].count -= 1;
    setProducts(newProducts);
  }
  function handleDelete(id) {
    const newProducts = products.filter((p) => p.id !== id);
    setProducts(newProducts);
  }

  function handleReset(id) {
    const newProducts = products.map((p) => {
      if (p.id === id) {
        p.count = 0;
      }
      return p;
    });
    setProducts(newProducts);
  }
}
