import { useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";
import { useAppStore } from "../../store/store";

export const Search = () => {
  const [debouncedValue, setValue] = useDebounceValue("", 500);
  // const { handleSearchByName } = useContext(AppContext);
  const { handleSearchByName } = useAppStore();

  useEffect(() => {
    handleSearchByName(debouncedValue);
  }, [debouncedValue]);
  return (
    <form className="w-full py-2">
      <input
        type="search"
        className="bg-white text-sky-500 w-full p-2 rounded-md outline-none border-none"
        placeholder="Buscar un personaje"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
