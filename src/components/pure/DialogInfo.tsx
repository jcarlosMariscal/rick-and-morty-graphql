import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { Characteristic } from "./Charasteristic";
import { TCharacteristic } from "../../types/types";
import { Button } from "./Button";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  characteristics: TCharacteristic[];
};

export const DialogInfo: React.FC<Props> = ({
  open,
  onOpenChange,
  name,
  characteristics,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] bg-white top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Info {name}
          </Dialog.Title>
          <Dialog.Description></Dialog.Description>
          <div className="flex flex-wrap gap-4">
            {characteristics.map((char, index) => (
              <Characteristic key={index} charac={char}>
                {char}
              </Characteristic>
            ))}
          </div>
          <Dialog.Close asChild>
            <Button
              size="xs"
              className="absolute top-[10px] right-[10px] appearance-none border border-red-500"
            >
              <span>x</span>
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
