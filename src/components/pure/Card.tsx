import React from "react";
import { NavLink } from "react-router-dom";
// import { Characteristic } from "./Charasteristic";
import { ICharacter } from "../../types/types";
import { BtnFavorite } from "./BtnFavorite";
import { Button } from "./Button";

type Props = {
  character: ICharacter;
  btnFavorite?: boolean;
  handleOpenModal: (open: boolean, character: ICharacter) => void;
};

export const Card: React.FC<Props> = ({
  character,
  btnFavorite = false,
  handleOpenModal,
}) => {
  // const [open, setOpen] = useState<boolean>(false);
  const { name, image, id } = character;
  // const onOpenChange = (open: boolean) => setOpen(open);
  // const characteristics: TCharacteristic[] = [gender, status, species];
  return (
    <div className="p-4 rounded-lg saturate-100 relative transition shadow-xl hover:border hover:border-sky-50 shadow-gray-100/100 hover:z-10 hover:scale-105 hover:saturate-150">
      <NavLink to={`/character/${id}`} className="flex justify-center">
        <img src={image} alt={name} className="rounded-xl" />
      </NavLink>
      <div className="my-2 flex justify-between items-center">
        <h4 className="font-bold my-2">{name}</h4>
        <div className="flex gap-2">
          {btnFavorite && <BtnFavorite character={character} />}
          <div className="">
            <Button size="xs" onClick={() => handleOpenModal(true, character)}>
              <span className="leading-none">¡</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
