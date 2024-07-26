import { useState } from "react";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import SortingBox from "../../components/SortingBox/SortingBox";

export default function Home() {
  // sorting state
  const [sorted, setSorted] = useState("Featured");

  console.log(sorted);

  return (
    <>
      <div>
        <SortingBox sorted={sorted} setSorted={setSorted} />
        <ProductsContainer sorted={sorted} />
      </div>
    </>
  );
}
