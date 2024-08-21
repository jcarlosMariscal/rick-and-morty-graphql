import { createContext, ReactNode, useState } from "react";
import { ICharacter } from "../types/types";
import { toast } from "sonner";

type AppContextType = {
  favorites: ICharacter[];
  addFavorite: (character: ICharacter) => void;
  searchName: string;
  handleSearchByName: (name: string) => void;
};
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<ICharacter[]>([]);
  const [searchName, setSearchName] = useState<string>("");

  const addFavorite = (character: ICharacter) => {
    setFavorites((prev) => {
      // Verificamos si el personaje ya está en favoritos para quitarlo.
      const isFavorite = prev.some((fav) => fav.id === character.id);
      if (isFavorite) {
        toast.info("Se ha quitado a este personaje de favoritos.");
        return prev.filter((fav) => fav.id !== character.id);
      }
      // Evitamos que se pueda agregar un personaje dos veces.
      if (prev.some((fav) => fav.id === character.id)) {
        toast.warning("Este personaje ya se encuentra en tus favoritos.");
        return prev;
      }
      if (prev.length === 5) {
        return [...prev.slice(1), character];
      }
      toast.success("El personaje se ha agregado a favoritos.");
      return [...prev, character];
    });
  };
  const handleSearchByName = (name: string) => setSearchName(name);
  return (
    <AppContext.Provider
      value={{
        favorites,
        addFavorite,
        searchName,
        handleSearchByName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
