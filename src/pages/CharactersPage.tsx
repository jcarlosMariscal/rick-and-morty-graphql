import { Characters } from "../components/Characters/Characters";
import { Spinner } from "../components/pure/Spinner";
import { Error } from "../components/pure/Error";
import { useLayout } from "../hooks/useLayout";
import { useEffect } from "react";

export const CharactersPage = () => {
  const { characters, error, ref, loading } = useLayout();
  useEffect(() => {
    console.log(characters);
  }, [characters]);
  if (error) return <Error message="Ha ocurrido un error." />;
  console.log(characters);

  return (
    <>
      <div className="p-8 sm:p-12">
        <Characters characters={characters!} />
        {characters!.length > 0 && (
          <>
            <span ref={ref}></span>
            {loading && <Spinner />}
          </>
        )}
      </div>
    </>
  );
};
