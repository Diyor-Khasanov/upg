import React, { useState, useEffect } from "react";
import "./Favorites.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // LocalStorage dan favorites olish
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (product) => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.name !== product.name
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      <div className="wrapper">
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favorites.map((fav, index) => (
            <div className="card" key={index}>
              <img src={fav.img} alt={fav.name} />
              <h2 className="name">{fav.name}</h2>
              <p className="price">Price: ${fav.price}</p>

              <button onClick={() => removeFromFavorites(fav)}>
                <DeleteIcon /> Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
