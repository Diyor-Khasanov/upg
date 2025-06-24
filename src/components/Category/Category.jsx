import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Keyboards",
      img: "https://assets.corsair.com/image/upload/f_auto,q_auto/content/CH-9000220-NA-CGK95-RGB-NA-003.png",
    },
    {
      id: 2,
      name: "Mouses",
      img: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/buy/mx-master-3s-business-product-callout.png?v=1",
    },
    {
      id: 3,
      name: "Microphones",
      img: "https://i.ytimg.com/vi/EqzE3QOJwBw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJXydfrXCsVUGBhS3KuBEhTRIjvg",
    },
    {
      id: 4,
      name: "Headphones",
      img: "https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/Y/6Y2G8AA-1_T1717748069.png",
    },
    {
      id: 5,
      name: "Monitors",
      img: "https://www.lg.com/content/dam/channel/wcms/kz/sac-id-it-rac/it-mnt-monitors/27gs75q/feature-cards/ultragear-27gs75q-06-3-gamer-centric-design-m.jpg",
    },
    {
      id: 6,
      name: "WI-FI",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2yVnxDE7izDVqC-FjbklLt7aHGxSitxAiQ&s",
    },
    {
      id: 7,
      name: "Webcams",
      img: "https://www.kaplen.com.sg/cdn/shop/products/LogitechC922-1_900x.png?v=1647955714",
    },
    {
      id: 8,
      name: "Mousepads",
      img: "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
    },
  ];

  return (
    <div>
      <h1 className="c">Categories</h1>
      <div className="container-categories">
        {categories.map((category) => (
          <Link to={`/category/${category.name}`} key={category.id}>
            <div className="category-card">
              <img src={category.img} alt="category" />
              <p className="category-title">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
