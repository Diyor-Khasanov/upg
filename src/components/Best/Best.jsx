import React, { useState } from "react";
import "./Best.scss";

const Best = () => {
  const [cart, setCart] = useState([]);

  const computerEquipment = [
    {
      img: "https://www.lg.com/content/dam/channel/wcms/kz/sac-id-it-rac/it-mnt-monitors/27gs75q/feature-cards/ultragear-27gs75q-06-3-gamer-centric-design-m.jpg",
      name: "LG UltraGear 27” QHD Monitor",
      price: 399,
      company: "LG",
      rating: 4.7,
    },
    {
      img: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/buy/mx-master-3s-business-product-callout.png?v=1",
      name: "Logitech MX Master 3 Mouse",
      price: 99,
      company: "Logitech",
      rating: 4.8,
    },
    {
      img: "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9000220-NA-CGK95-RGB-NA-003.png",
      name: "Corsair K95 RGB Mechanical Keyboard",
      price: 199,
      company: "Corsair",
      rating: 4.6,
    },
    {
      img: "https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/Y/6Y2G8AA-1_T1717748069.png",
      name: "HyperX Cloud II Gaming Headset",
      price: 89,
      company: "HyperX",
      rating: 4.7,
    },
    {
      img: "https://seventrade.uz/upload/iblock/ec5/z4zgbwhocdsz02gr9hzcdatpxbqtft8d.jpg",
      name: "Samsung 980 Pro 1TB NVMe SSD",
      price: 129,
      company: "Samsung",
      rating: 4.9,
    },
    {
      img: "https://www.kaplen.com.sg/cdn/shop/products/LogitechC922-1_900x.png?v=1647955714",
      name: "Logitech C920 HD Webcam",
      price: 79,
      company: "Logitech",
      rating: 4.5,
    },
    {
      img: "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
      name: "Razer Goliathus Extended Mousepad",
      price: 39,
      company: "Razer",
      rating: 4.6,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2yVnxDE7izDVqC-FjbklLt7aHGxSitxAiQ&s",
      name: "ASUS RT-AX82U AX5400 WiFi 6 Router",
      price: 179,
      company: "ASUS",
      rating: 4.7,
    },
    {
      img: "https://i.ytimg.com/vi/EqzE3QOJwBw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJXydfrXCsVUGBhS3KuBEhTRIjvg",
      name: "Blue Yeti USB Microphone",
      price: 129,
      company: "Blue Microphones",
      rating: 4.6,
    },
    {
      img: "https://uk.ugreen.com/cdn/shop/products/ugreen-6-in-1-usb-c-hub-4k-at-60hz-hdmi-100w-pd-700667.jpg?v=1699585135",
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
      <h1 className="tit">The Best Sellers</h1>
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

export default Best;
