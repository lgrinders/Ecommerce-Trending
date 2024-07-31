import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import ViewCart from "./pages/ViewCart/ViewCart";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/viewcart" element={<ViewCart />} />
      </Routes>
      <Sidebar />
      <Footer />
    </>
  );
}
