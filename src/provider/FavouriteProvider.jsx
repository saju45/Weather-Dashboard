/* eslint-disable react/prop-types */
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

export default function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourite = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      { latitude: latitude, longitude: longitude, location: location },
    ]);
  };

  const removeFromFavourite = (location) => {
    const restFavourite = favourites.filter((fav) => fav.location !== location);

    setFavourites(restFavourite);
  };
  return (
    <FavouriteContext.Provider
      value={{ addToFavourite, removeFromFavourite, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
