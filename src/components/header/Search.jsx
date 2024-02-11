import { useContext } from "react";
import SerachLogo from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getlocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";
export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const fetchLocation = getlocationByName(searchTerm);
  //   setSelectedLocation({ ...fetchLocation });
  // };

  const doSearch = useDebounce((term) => {
    const fetchLocation = getlocationByName(term);
    setSelectedLocation({ ...fetchLocation });
  }, 500);

  const handleChanged = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChanged}
          required
        />
        <button type="submit">
          <img src={SerachLogo} />
        </button>
      </div>
    </form>
  );
}
