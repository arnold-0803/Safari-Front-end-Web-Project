import React, { createContext, useContext, useEffect, useState } from "react";

const FavouriteContext = createContext();

export const useFavourite = () => useContext(FavouriteContext);

function FavouriteProvider({children}) {

  const [favouriteItems, setFavoutiteItems] = useState([]);

  useEffect(() => {
    const loadFavourite = () => {
      const savedToFavourite = JSON.parse(localStorage.getItem("favourites")) || [];
      setFavoutiteItems(savedToFavourite);
    }

    loadFavourite();

    window.addEventListener("storage", loadFavourite);

    return () => {
      window.removeEventListener("storage", loadFavourite);
    }
  }, []);

  const addToFavourites = (item) => {
    const uniquePath = {...item, source: item.source};
    const updateFavourites = [...favouriteItems, uniquePath];
    setFavoutiteItems(updateFavourites);
    localStorage.setItem("favourites", JSON.stringify(updateFavourites));
  }

  const removeFromFavourites = (id, source) => {
    const updateFavourites = favouriteItems.filter(
      (item) => item.id !== id || item.source !== source
    );
    setFavoutiteItems(updateFavourites);
    localStorage.setItem("favourites", JSON.stringify(updateFavourites));
  };

  const values = {
    favouriteItems,
    addToFavourites,
    removeFromFavourites: (id, source) => removeFromFavourites(id, source)
  }
  return (
    <FavouriteContext.Provider value={values}>
      {children}
    </FavouriteContext.Provider>
  )
}

export default FavouriteProvider;
