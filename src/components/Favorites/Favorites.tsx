import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../pure/Sheet";
import { Characters } from "../Characters/Characters";
import { useAppStore } from "../../store/store";
type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const Favorites: React.FC<Props> = ({ isOpen, onOpenChange }) => {
  const { favorites } = useAppStore();
  return (
    <Sheet open={isOpen} onOpenChange={() => onOpenChange(false)}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Favoritos</SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="flex flex-col gap-5">
            {favorites.length ? (
              <Characters characters={favorites} favorite />
            ) : (
              <span>Actualmente no tienes favoritos.</span>
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
