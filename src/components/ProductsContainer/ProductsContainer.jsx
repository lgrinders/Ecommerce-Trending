import { useContext } from "react";
// import product context
import { ProductContext } from "../../context/ProductProvider";
// import Product
import Product from "../Product/Product";

// uses sorted state from Home component
const ProductsContainer = ({ sorted }) => {
  // import products context
  const { products } = useContext(ProductContext);

  // filters products based on sorted state
  let filteredProducts = products.filter((product) => {
    if (sorted === "featured") {
      return products.sort((a, b) => a.id - b.id);
    } else if (sorted.startsWith("price: low to high")) {
      return products.sort((a, b) => a.price - b.price);
    } else if (sorted.startsWith("price: high to low")) {
      return products.sort((a, b) => b.price - a.price);
    } else {
      return product.category === sorted;
    }
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* map out filteredProducts */}
        {filteredProducts.map((product) => {
          // return each filteredProduct using Product component
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
