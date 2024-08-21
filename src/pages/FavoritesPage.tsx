import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Characters } from "../components/Characters/Characters";

export const FavoritesPage = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="p-8 sm:p-12">
      <Characters characters={favorites} favorite />
    </div>
  );
};
