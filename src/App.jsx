import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import ProductsPage from "./components/ProductsPage/ProductSlider";
import Section from "./components/Section/Section";
import Category from "./components/Category/Category";
import AboutUs from "./components/AboutUs/AboutUs";
import HelpSection from "./components/HelpSection/HelpSection";
import Footer from "./components/Footer/Footer";
import Best from "./components/Best/Best";
import Review from "./components/Review/Review";

const App = () => {

  return (
    <div>
      <Header />
      <Navbar />
      <ProductSlider />
      <ProductsPage />
      <Best />
      <Section />
      <Category />
      <AboutUs />
      <HelpSection />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
