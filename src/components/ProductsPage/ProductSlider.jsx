import React, { useState } from "react";
import "./ProductSlider.scss";

const ProductSlider = () => {
  const [cart, setCart] = useState([]);

  const computerEquipment = [
    {
      img: "https://example.com/images/lg-ultragear-monitor.jpg",
      name: "LG UltraGear 27” QHD Monitor",
      price: 399,
      company: "LG",
      rating: 4.7,
    },
    {
      img: "https://example.com/images/logitech-mx-master3.jpg",
      name: "Logitech MX Master 3 Mouse",
      price: 99,
      company: "Logitech",
      rating: 4.8,
    },
    {
      img: "https://example.com/images/corsair-k95-keyboard.jpg",
      name: "Corsair K95 RGB Mechanical Keyboard",
      price: 199,
      company: "Corsair",
      rating: 4.6,
    },
    {
      img: "https://example.com/images/hyperx-cloud-ii.jpg",
      name: "HyperX Cloud II Gaming Headset",
      price: 89,
      company: "HyperX",
      rating: 4.7,
    },
    {
      img: "https://example.com/images/samsung-ssd-980.jpg",
      name: "Samsung 980 Pro 1TB NVMe SSD",
      price: 129,
      company: "Samsung",
      rating: 4.9,
    },
    {
      img: "https://example.com/images/logitech-c920.jpg",
      name: "Logitech C920 HD Webcam",
      price: 79,
      company: "Logitech",
      rating: 4.5,
    },
    {
      img: "https://example.com/images/razer-goliathus-pad.jpg",
      name: "Razer Goliathus Extended Mousepad",
      price: 39,
      company: "Razer",
      rating: 4.6,
    },
    {
      img: "https://example.com/images/asus-ax5400-router.jpg",
      name: "ASUS RT-AX82U AX5400 WiFi 6 Router",
      price: 179,
      company: "ASUS",
      rating: 4.7,
    },
    {
      img: "https://example.com/images/blue-yeti.jpg",
      name: "Blue Yeti USB Microphone",
      price: 129,
      company: "Blue Microphones",
      rating: 4.6,
    },
    {
      img: "https://example.com/images/uGreen-usb-hub.jpg",
      name: "UGREEN 6-in-1 USB-C Hub",
      price: 49,
      company: "UGREEN",
      rating: 4.4,
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h1 className="tit">News</h1>
      <div className="wrapper">
        {computerEquipment.map((e, index) => (
          <div className="card" key={index}>
            <img src={e.img} alt={e.name} />
            <h2 className="name">{e.name}</h2>
            <div className="con">
              <p className="rating">⭐{e.rating}</p>
              <p className="company">{e.company}</p>
            </div>
            <p className="price">Price: ${e.price}</p>
            <button onClick={() => addToCart(e)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
