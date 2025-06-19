import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import ProductsPage from "./components/ProductsPage/ProductSlider";
import Section from "./components/Section/Section";
import Category from "./components/Category/Category";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ProductSlider />
      <ProductsPage />
      <Section />
      <Category />
    </div>
  );
};

export default App;
