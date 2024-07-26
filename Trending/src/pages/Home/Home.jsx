import { useState } from "react";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import SortingBox from "../../components/SortingBox/SortingBox";

export default function Home() {
  // sorting state
  const [sorted, setSorted] = useState("featured");

  

  return (
    <>
      <div className="px-5">
        <SortingBox sorted={sorted} setSorted={setSorted} />
        <ProductsContainer sorted={sorted} />
      </div>
    </>
  );
}
