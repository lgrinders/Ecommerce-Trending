import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ProductDetails } from "./pages/ProductDetails";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
    </>
  );
}
