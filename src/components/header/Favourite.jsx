/* eslint-disable react/prop-types */
import FavouriteLogo from "../../assets/heart.svg";
export default function Favourite({ onShowModal }) {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onShowModal}
    >
      <img src={FavouriteLogo} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
}
