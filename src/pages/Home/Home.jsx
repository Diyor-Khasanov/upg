import React from "react";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductsPage from "../../components/ProductsPage/ProductSlider";
import Best from "../../components/Best/Best";
import Section from "../../components/Section/Section";
import Category from "../../components/Category/Category";
import AboutUs from "../../components/AboutUs/AboutUs";
import HelpSection from "../../components/HelpSection/HelpSection";
import Review from "../../components/Review/Review";

const Home = () => {
  return (
    <div>
      <ProductSlider />
      <ProductsPage />
      <Best />
      <Section />
      <Category />
      <AboutUs />
      <HelpSection />
      <Review />
    </div>
  );
};

export default Home;
