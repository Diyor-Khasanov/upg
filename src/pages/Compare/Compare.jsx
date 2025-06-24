import React from "react";
import "./Compare.scss";

const Compare = () => {
  const products = [
    {
      id: 1,
      name: "LG UltraGear 27” QHD Monitor",
      img: "https://www.lg.com/content/dam/channel/wcms/kz/sac-id-it-rac/it-mnt-monitors/27gs75q/feature-cards/ultragear-27gs75q-06-3-gamer-centric-design-m.jpg",
      markets: [
        { name: "UPG", price: 400 },
        { name: "NEO", price: 390 },
        { name: "OnePC", price: 410 },
      ],
    },
    {
      id: 2,
      name: "Logitech MX Master 3 Mouse",
      img: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/buy/mx-master-3s-business-product-callout.png?v=1",
      markets: [
        { name: "UPG", price: 100 },
        { name: "NEO", price: 95 },
        { name: "OnePC", price: 98 },
      ],
    },
  ];

  return (
    <div className="compare-markets-container">
      <h1>Compare Product Prices Across Markets</h1>
      {products.map((product) => (
        <div className="product-compare" key={product.id}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <table>
            <thead>
              <tr>
                <th>Markets</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {product.markets.map((market, index) => (
                <tr key={index}>
                  <td>{market.name}</td>
                  <td>${market.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Compare;
