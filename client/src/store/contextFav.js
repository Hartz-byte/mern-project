import { createContext, useState } from "react";

const FavContext = createContext({
  favItems: [],
  favoriteIds: [],
  addFavItem: () => {},
  removeFavItem: () => {},
  isFavItem: () => {},
});

export function ContextFav(props) {
  const [userFav, setUserFav] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addFavItem = (product) => {
    setUserFav((prevFavItem) => {
      return prevFavItem.concat(product);
    });
  };

  //   const removeFavItem = (id) => {
  //     setUserFav((prevFavItem) => {
  //       return prevFavItem.filter((product) => product._id !== id);
  //     });
  //   };

  const removeFavItem = (productId) => {
    setFavoriteIds((prevFavIds) => prevFavIds.filter((id) => id !== productId));
  };

  const isFavItem = (id) => {
    return userFav.some((product) => product._id === id);
  };

  const context = {
    favItems: userFav,
    favoriteIds,
    addFavItem: addFavItem,
    removeFavItem: removeFavItem,
    isFavItem: isFavItem,
  };

  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
}

export default FavContext;
