import React, { useEffect, useState } from "react";
import { ICharacter } from "../../types/types";
import { Button } from "./Button";
import { useAppStore } from "../../store/store";

type Props = {
  character: ICharacter;
};

export const BtnFavorite: React.FC<Props> = ({ character }) => {
  const { favorites, addFavorite, removeFavorite } = useAppStore();
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
      onClick={() =>
        isFavorite ? removeFavorite(character!.id) : addFavorite(character!)
      }
    >
      <svg
        className={` size-6  ${
          isFavorite
            ? "fill-yellow-500 stroke-yellow-500"
            : "stroke-yellow-300 fill-white hover:stroke-yellow-500 "
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
