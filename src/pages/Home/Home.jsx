import React, { useState, useEffect } from "react";
import Best from "../../components/Best/Best";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ProductsPage from "../../components/ProductsPage/ProductSlider";
import Section from "../../components/Section/Section";
import Category from "../../components/Category/Category";
import AboutUs from "../../components/AboutUs/AboutUs";
import HelpSection from "../../components/HelpSection/HelpSection";
import Review from "../../components/Review/Review";

const Home = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    let updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <ProductSlider />
      <ProductsPage addToCart={addToCart} />
      <Best addToCart={addToCart} />
      <Section />
      <Category />
      <AboutUs />
      <HelpSection />
      <Review />
    </div>
  );
};

export default Home;
