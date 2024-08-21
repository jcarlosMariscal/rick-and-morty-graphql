import { FC } from "react";
import { ICharacter } from "../../types/types";
import { Characteristic } from "../pure/Charasteristic";
import { BtnFavorite } from "../pure/BtnFavorite";

type Props = {
  character: ICharacter;
};
export const Character: FC<Props> = ({ character }) => {
  const { gender, status, species, type } = character;
  return (
    <div className="bg-green-50 p-8 w-full md:w-3/5 rounded-lg flex gap-4 relative flex-col sm:flex-row">
      <div className="">
        <img
          src={character?.image}
          alt="Character Image"
          className="rounded-lg"
        />
      </div>
      <div className="w-full">
        <div className="my-4">
          <h2 className="text-lg font-bold">{character?.name}</h2>
          <BtnFavorite character={character} />
        </div>
        <div className="flex gap-4 flex-wrap">
          {gender && <Characteristic gender={gender}>{gender}</Characteristic>}
          {status && <Characteristic status={status}>{status}</Characteristic>}
          {species && (
            <Characteristic species={species}>{species}</Characteristic>
          )}
          {type && <Characteristic>{type}</Characteristic>}
        </div>
        <p>Ha aparecido en {character?.episode.length} episodio(s)</p>
        <p>
          <span>Origen: </span>
          {character?.location.name}
        </p>
        <p>
          <span>Ubicación: </span>
          {character?.origin.name}
        </p>
      </div>
    </div>
  );
};
