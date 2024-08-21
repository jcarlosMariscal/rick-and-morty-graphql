import { FC, useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

type Props = {
  searchCharacter: (name: string) => void;
};
export const Search: FC<Props> = ({ searchCharacter }) => {
  const [debouncedValue, setValue] = useDebounceValue("", 500);

  useEffect(() => {
    if (debouncedValue) {
      searchCharacter(debouncedValue);
    }
  }, [debouncedValue]);
  return (
    <form className="w-full py-2">
      <input
        type="search"
        className="bg-green-50 text-green-500 w-full p-2 rounded-lg outline-none border-none"
        placeholder="Buscar un personaje"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
