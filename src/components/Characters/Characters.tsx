import React from "react";
import { Card } from "../pure/Card";
import { ICharacter } from "../../types/types";

type Props = {
  characters: ICharacter[];
  favorite?: boolean;
};
export const Characters: React.FC<Props> = ({
  characters,
  favorite = false,
}) => {
  if (!characters.length)
    return (
      <div className="w-full text-center">
        No hay nada que mostrar en este momento.
      </div>
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.map((character, index) => (
        <Card key={index} character={character} btnFavorite={favorite} />
      ))}
    </div>
  );
};
