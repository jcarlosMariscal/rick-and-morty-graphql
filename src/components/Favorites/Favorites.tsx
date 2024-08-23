import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../pure/Sheet";
import { useAppStore } from "../../store/store";
import { AnimatePresence, Reorder } from "framer-motion";
import { Card } from "../pure/Card";
import { useNavigate, useParams } from "react-router-dom";

export const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, newOrder } = useAppStore();
  const { favorites: fav } = useParams();
  const [isActive, setIsActive] = useState(fav ? true : false);

  useEffect(() => {
    setIsActive(fav ? true : false);
  }, [fav]);

  return (
    <Sheet open={isActive} onOpenChange={() => navigate("/")}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Favoritos</SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="flex flex-col gap-5">
            {favorites.length ? (
              <AnimatePresence mode="popLayout">
                <Reorder.Group
                  axis="y"
                  onReorder={newOrder}
                  values={favorites}
                  className="flex flex-col gap-6"
                >
                  {favorites.map((fav) => (
                    <Reorder.Item
                      key={fav.id}
                      value={fav}
                      layout
                      initial={{ translateY: -100, opacity: 0 }}
                      animate={{ translateY: 0, scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{
                        type: "spring",
                      }}
                      className="cursor-grab"
                    >
                      <Card character={fav} btnFavorite />
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </AnimatePresence>
            ) : (
              <span>Actualmente no tienes favoritos.</span>
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
