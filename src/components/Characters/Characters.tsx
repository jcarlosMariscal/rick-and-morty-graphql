import React, { useState } from "react";
import { Card } from "../pure/Card";
import { ICharacter } from "../../types/types";
import { DialogInfo } from "../pure/DialogInfo";

type Props = {
  characters: ICharacter[];
  favorite?: boolean;
};
export const Characters: React.FC<Props> = ({
  characters,
  favorite = false,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [character, setCharacter] = useState<ICharacter>();
  const handleOpenModal = (open: boolean, character?: ICharacter) => {
    setOpen(open);
    setCharacter(character);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {characters.map((character, index) => (
          <Card
            key={index}
            character={character}
            btnFavorite={favorite}
            handleOpenModal={(open, character) =>
              handleOpenModal(open, character)
            }
          />
        ))}
      </div>
      {character && (
        <DialogInfo
          name={character.name}
          characteristics={[
            character.gender,
            character.species,
            character.status,
          ]}
          open={open}
          onOpenChange={() => handleOpenModal(false)}
        ></DialogInfo>
      )}
    </>
  );
};
