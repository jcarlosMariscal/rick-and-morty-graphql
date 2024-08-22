import React, { useContext, useEffect, useState } from "react";
import { ICharacter } from "../../types/types";
import { AppContext } from "../../context/AppContext";
import { Button } from "./Button";

type Props = {
  character: ICharacter;
};

export const BtnFavorite: React.FC<Props> = ({ character }) => {
  const { addFavorite, favorites } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(
    favorites.some((fav) => fav.id === character?.id)
  );
  useEffect(() => {
    setIsFavorite(favorites.some((fav) => fav.id === character?.id));
  }, [favorites]);

  return (
    <Button
      size="xs"
      intent="secondary"
      className={`flex items-center`}
      onClick={() => addFavorite(character!)}
    >
      <svg
        className={` size-5  ${
          isFavorite
            ? "fill-yellow-500 stroke-yellow-500"
            : "stroke-yellow-500 fill-yellow-100"
        } }`}
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </Button>
  );
};
