import { NavLink } from "react-router-dom";
import { Search } from "../Search/Search";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const Header = () => {
  const { handleSearchByName } = useContext(AppContext);
  const searchCharacter = (name: string) => handleSearchByName(name);
  return (
    <div className="h-16 px-4 md:px-10 bg-sky-500 text-white p-4 flex justify-between items-center">
      <NavLink to="/">
        <div className="size-14 bg-white text-sky-500 flex justify-center items-center rounded-full">
          <span className="font-bold">RAM</span>
        </div>
      </NavLink>
      <div className="flex gap-2 items-center">
        <Search searchCharacter={searchCharacter} />
        <NavLink to="favorites" className="nav-link">
          Favoritos
        </NavLink>
      </div>
    </div>
  );
};
