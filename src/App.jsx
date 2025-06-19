import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import ProductsPage from "./components/ProductsPage/ProductSlider";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ProductSlider />
      <ProductsPage />
    </div>
  );
};

export default App;
