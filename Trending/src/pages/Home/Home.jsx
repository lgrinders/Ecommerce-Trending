import { useState } from "react";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import SortingBox from "../../components/SortingBox/SortingBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

export default function Home() {
  // sorting state
  const [sorted, setSorted] = useState("featured");

  return (
    <>
      <Header />
      <div className="p-5 pt-40">
        <SortingBox sorted={sorted} setSorted={setSorted} />
        <ProductsContainer sorted={sorted} />
      </div>
      <Sidebar />
    </>
  );
}
