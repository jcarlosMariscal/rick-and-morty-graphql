import { NavLink } from "react-router-dom";
import { Search } from "../Search/Search";
import { useState } from "react";
import { Button } from "../pure/Button";
import { Favorites } from "../Favorites/Favorites";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="h-16 px-4 md:px-10 bg-sky-500 text-white p-4 flex justify-between items-center">
        <NavLink to="/">
          <div className="size-14 bg-white text-sky-500 flex justify-center items-center rounded-full">
            <span className="font-bold">RAM</span>
          </div>
        </NavLink>
        <div className="flex gap-2 items-center">
          <Search />
          <Button intent="thirty" onClick={() => setIsOpen(!isOpen)}>
            Favoritos
          </Button>
        </div>
      </div>
      <Favorites
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      ></Favorites>
    </>
  );
};
