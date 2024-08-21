import React, { useContext, useEffect, useState } from "react";
import { ICharacter } from "../../types/types";
import { AppContext } from "../../context/AppContext";

type Props = {
  character: ICharacter;
};

export const BtnFavorite: React.FC<Props> = ({ character }) => {
  const { addFavorite, favorites } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(
    favorites.some((fav) => fav.id === character?.id)
  );
  const [fav, setFav] = useState<boolean>(false);
  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.id === character?.id));
  }, [favorites]);

  useEffect(() => {
    if (fav) {
      setTimeout(() => {
        setFav(false);
      }, 1000);
    }
  }, [fav]);
  return (
    <div className="absolute -right-3 -top-3">
      <button
        className={`transition hover:scale-110 p-1 bg-yellow-500 rounded-full relative`}
        onClick={() => {
          addFavorite(character!);
          setFav(true);
        }}
      >
        <svg
          className={`stroke-white size-6  ${
            isFavorite ? "fill-white" : "fill-none"
          } ${fav ? "animate-favorite" : ""}`}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </button>
    </div>
  );
};
