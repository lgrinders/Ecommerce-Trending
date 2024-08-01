import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      // turn into json
      const data = await response.json();
      // filter into only clothing items
      const clothingData = data.filter((item) => {
        return (
          item.category === "men's clothing" ||
          item.category === "women's clothing"
        );
      });
      // set state as clothing data
      setProducts(clothingData);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
