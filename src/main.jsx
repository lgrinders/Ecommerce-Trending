import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// improt product provider
import ProductProvider from "./context/ProductProvider.jsx";
// import sidebar provider
import SidebarProvider from "./context/SidebarContext.jsx";
// import cart provider
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <BrowserRouter basename="/Ecommerce-Trending/">
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>,
);
