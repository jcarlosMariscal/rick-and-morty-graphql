import React from "react";
import { NavLink } from "react-router-dom";
import { Characteristic } from "./Charasteristic";
import { ICharacter } from "../../types/types";
import { BtnFavorite } from "./BtnFavorite";

type Props = {
  character: ICharacter;
  btnFavorite?: boolean;
};

export const Card: React.FC<Props> = ({ character, btnFavorite = false }) => {
  const { name, image, gender, species, status, id, type } = character;
  return (
    <NavLink
      to={`/character/${id}`}
      className="bg-sky-50 p-4  rounded-lg saturate-100 relative transition hover:shadow-lg hover:shadow-slate-300/50 hover:z-10 hover:scale-105 hover:saturate-150"
    >
      {btnFavorite && <BtnFavorite character={character} />}
      <div className="flex justify-center">
        <img src={image} alt={name} className="rounded-xl" />
      </div>
      <div className="card__content">
        <h4 className="font-bold my-2">{name}</h4>
        <div className="flex flex-wrap gap-4">
          {gender && <Characteristic gender={gender}>{gender}</Characteristic>}
          {status && <Characteristic status={status}>{status}</Characteristic>}
          {species && (
            <Characteristic species={species}>{species}</Characteristic>
          )}
          {type && <Characteristic>{type}</Characteristic>}
        </div>
      </div>
    </NavLink>
  );
};
