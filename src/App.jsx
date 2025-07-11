import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Compare from "./pages/Compare/Compare";
import Favorites from "./pages/Favorites/Favorites";
import Cart from './pages/Cart/Cart'
import Contact from './pages/Contact/Contact'
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";


const App = () => {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:categoryName" element={<CategoryProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
