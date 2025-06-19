import React from "react";
import "./Category.scss";

const categories = [
  { id: 1, name: "Electronics", image: "" },
  { id: 2, name: "Clothing", image: "" },
  { id: 3, name: "Home & Kitchen", image: "" },
  { id: 4, name: "Beauty", image: "" },
  { id: 5, name: "Toys", image: "" },
  { id: 6, name: "Books", image: "" },
  { id: 7, name: "Sports", image: "" },
  { id: 8, name: "Accessories", image: "" },
];

const Category = () => {
  return (
    <section className="category-page">
      <h2 className="category-page__title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.id}>
            <div className="category-image">
              {cat.image ? (
                <img src={cat.image} alt={cat.name} />
              ) : (
                <div className="placeholder">Image</div>
              )}
            </div>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
