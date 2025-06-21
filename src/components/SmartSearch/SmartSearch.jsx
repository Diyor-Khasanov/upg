import React, { useState, useRef, useEffect } from "react";
import "./SmartSearch.scss";

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
    img: "https://seventrade.uz/upload/iblock/ec5/z4zgbwhocdsz02gr9hzcdatpxbqtft8d.jpg",
    name: "Samsung 980 Pro 1TB NVMe SSD",
    price: 129,
    company: "Samsung",
    rating: 4.9,
  },
  {
    img: "https://uk.ugreen.com/cdn/shop/products/ugreen-6-in-1-usb-c-hub-4k-at-60hz-hdmi-100w-pd-700667.jpg?v=1699585135",
    name: "UGREEN 6-in-1 USB-C Hub",
    price: 49,
    company: "UGREEN",
    rating: 4.4,
  },
];

const SmartSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const filtered = computerEquipment.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="smart-search" ref={searchRef}>
      <input
        type="text"
        placeholder="Search equipment..."
        onFocus={() => setIsOpen(true)}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isOpen && searchTerm.trim() && (
        <div className="dropdown">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <div key={i} className="dropdown-item">
                <img src={item.img} alt={item.name} />
                <div>
                  <p className="name">{item.name}</p>
                  <p className="company">{item.company}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-result">Nothing found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SmartSearch;
