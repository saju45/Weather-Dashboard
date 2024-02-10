import { useContext, useEffect, useState } from "react";
import redHeart from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";
export default function AddToFavourite() {
  const { addToFavourite, removeFromFavourite, favourites } =
    useContext(FavouriteContext);

  const { weatherData } = useContext(WeatherContext);
  const [isFavourite, toggleFavourite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  const handleFavourites = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourite(latitude, longitude, location);
    } else {
      removeFromFavourite(location);
    }
    toggleFavourite(!isFavourite);
  };

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(found);
  }, [location, favourites]);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? redHeart : heart} alt="" />
        </button>
      </div>
    </div>
  );
}
