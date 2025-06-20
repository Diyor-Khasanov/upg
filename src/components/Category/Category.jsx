import React from "react";
import './Category.scss'

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
      name: "Brackets", // monitor brackets / arms
      img: "https://m.media-amazon.com/images/I/61yCHzf2mYL.jpg",
    },
    {
      id: 7,
      name: "Speakers", // speakers
      img: "https://www.jbl.com.sg/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwf8ff7d4a/pdp/JBL_Quantum_Duo_Lifestyle_03_904x560px.png",
    },
    {
      id: 8,
      name: "Mousepads", // mousepads
      img: "https://i.ytimg.com/vi/jJA6u_YTrB0/maxresdefault.jpg",
    },
  ];

  return (
    <div>
        <h1 className="c">Categories</h1>
      <div className="container-categories">
        {categories.map((category) => (
          <div className="category-card">
            <img src={category.img} alt="category"/>
            <p className="category-title">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
