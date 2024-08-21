import { useContext, useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";
import { AppContext } from "../../context/AppContext";

export const Search = () => {
  const [debouncedValue, setValue] = useDebounceValue("", 500);
  const { handleSearchByName } = useContext(AppContext);

  useEffect(() => {
    handleSearchByName(debouncedValue);
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
