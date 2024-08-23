import React from "react";
import { Card } from "../pure/Card";
import { ICharacter } from "../../types/types";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  characters: ICharacter[];
  favorite?: boolean;
};
export const Characters: React.FC<Props> = ({
  characters,
  favorite = false,
}) => {
  return (
    <AnimatePresence mode="popLayout">
      {characters.map((character) => (
        <motion.div
          layout
          key={character.id}
          initial={{ translateY: -100, opacity: 0 }}
          animate={{ translateY: 0, scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{
            type: "spring",
            // delay: 0.06 * (character.id % 20),
          }}
        >
          <Card character={character} btnFavorite={favorite} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
