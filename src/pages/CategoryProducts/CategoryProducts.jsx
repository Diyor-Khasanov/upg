import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CategoryProducts.scss";

const CategoryProducts = ({ addToCart }) => {
  const { categoryName } = useParams();

  const products = {
    Keyboards: [
      {
        id: 1,
        name: "Corsair K95",
        img: "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9000220-NA-CGK95-RGB-NA-003.png",
        price: 199,
        description: "Professional mechanical keyboard for gaming and work.",
        subImages: [
          "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9000220-NA-CGK95-RGB-NA-003.png",
          "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
          "https://i.ytimg.com/vi/EqzE3QOJwBw/hq720.jpg",
          "https://www.kaplen.com.sg/cdn/shop/products/LogitechC922-1_900x.png?v=1647955714",
        ],
      },
    ],
    Mouses: [
      {
        id: 2,
        name: "Logitech MX Master 3",
        img: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/buy/mx-master-3s-business-product-callout.png?v=1",
        price: 99,
        description: "High-performance mouse for professionals and creatives.",
        subImages: [
          "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/buy/mx-master-3s-business-product-callout.png?v=1",
          "https://seventrade.uz/upload/iblock/ec5/z4zgbwhocdsz02gr9hzcdatpxbqtft8d.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2yVnxDE7izDVqC-FjbklLt7aHGxSitxAiQ&s",
          "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
        ],
      },
    ],

    Microphones: [
        {
          id: 3,
          name: "Blue Yeti USB Microphone",
          img: "https://i.ytimg.com/vi/EqzE3QOJwBw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJXydfrXCsVUGBhS3KuBEhTRIjvg",
          price: 129,
          description: "Professional microphone for gaming and work.",
          subImages: [
            "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9000220-NA-CGK95-RGB-NA-003.png",
            "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
            "https://i.ytimg.com/vi/EqzE3QOJwBw/hq720.jpg",
            "https://www.kaplen.com.sg/cdn/shop/products/LogitechC922-1_900x.png?v=1647955714",
          ],
        },
      ],
      Headphones: [
        {
          id: 4,
          name: "HyperX Cloud II Gaming Headset",
          img: "https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/Y/6Y2G8AA-1_T1717748069.png",
          price: 89,
          description: "High-performance headset for professionals and creatives.",
          subImages: [
            "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/buy/mx-master-3s-business-product-callout.png?v=1",
            "https://seventrade.uz/upload/iblock/ec5/z4zgbwhocdsz02gr9hzcdatpxbqtft8d.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2yVnxDE7izDVqC-FjbklLt7aHGxSitxAiQ&s",
            "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
          ],
        },
      ],

      Monitors: [
        {
          id: 5,
          name: "LG UltraGear 27” QHD Monitor",
          img: "https://www.lg.com/content/dam/channel/wcms/kz/sac-id-it-rac/it-mnt-monitors/27gs75q/feature-cards/ultragear-27gs75q-06-3-gamer-centric-design-m.jpg",
          price: 399,
          description: "Professional moniitor for gaming and work.",
          subImages: [
            "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9000220-NA-CGK95-RGB-NA-003.png",
            "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
            "https://i.ytimg.com/vi/EqzE3QOJwBw/hq720.jpg",
            "https://www.kaplen.com.sg/cdn/shop/products/LogitechC922-1_900x.png?v=1647955714",
          ],
        },
      ],
      WIFI: [
        {
          id: 6,
          name: "ASUS RT-AX82U AX5400 WiFi 6 Router",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2yVnxDE7izDVqC-FjbklLt7aHGxSitxAiQ&s",
          price: 179,
          description: "High-performance wofo for professionals and creatives.",
          subImages: [
            "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/buy/mx-master-3s-business-product-callout.png?v=1",
            "https://seventrade.uz/upload/iblock/ec5/z4zgbwhocdsz02gr9hzcdatpxbqtft8d.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2yVnxDE7izDVqC-FjbklLt7aHGxSitxAiQ&s",
            "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
          ],
        },
      ],

      Webcams: [
        {
          id: 7,
          name: "Logitech C920 HD Webcam",
          img: "https://www.kaplen.com.sg/cdn/shop/products/LogitechC922-1_900x.png?v=1647955714",
          price: 79,
          description: "Professional mechanical webcam for gaming and work.",
          subImages: [
            "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9000220-NA-CGK95-RGB-NA-003.png",
            "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
            "https://i.ytimg.com/vi/EqzE3QOJwBw/hq720.jpg",
            "https://www.kaplen.com.sg/cdn/shop/products/LogitechC922-1_900x.png?v=1647955714",
          ],
        },
      ],
      Mousepads: [
        {
          id: 8,
          name: "Razer Goliathus Extended Mousepad",
          img: "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
          price: 39,
          description: "High-performance mousepad for professionals and creatives.",
          subImages: [
            "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/buy/mx-master-3s-business-product-callout.png?v=1",
            "https://seventrade.uz/upload/iblock/ec5/z4zgbwhocdsz02gr9hzcdatpxbqtft8d.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2yVnxDE7izDVqC-FjbklLt7aHGxSitxAiQ&s",
            "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
          ],
        },
      ],
  };

  const currentProducts = products[categoryName] || [];
  const [selectedProduct, setSelectedProduct] = useState(currentProducts[0]);
  const [previewImg, setPreviewImg] = useState(currentProducts[0]?.img);

  useEffect(() => {
    if (currentProducts.length > 0) {
      setSelectedProduct(currentProducts[0]);
      setPreviewImg(currentProducts[0].img);
    }
  }, [categoryName]);

  if (currentProducts.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <div className="category-products">
      <h1>{selectedProduct.name}</h1>
      <div className="product-details">
        <div className="images-section">
          <img className="preview-img" src={previewImg} alt="Preview" />
          <div className="sub-images">
            {selectedProduct.subImages.map((subImg, idx) => (
              <img
                key={idx}
                src={subImg}
                alt="Sub"
                className="sub-img"
                onClick={() => setPreviewImg(subImg)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h2>{selectedProduct.name}</h2>
          <p className="desc">{selectedProduct.description}</p>
          <p className="price">${selectedProduct.price}</p>
          <button onClick={() => addToCart(selectedProduct)}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
