import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import ProductsPage from "./components/ProductsPage/ProductSlider";
import Section from "./components/Section/Section";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ProductSlider />
      <ProductsPage />
      <Section />
    </div>
  );
};

export default App;
