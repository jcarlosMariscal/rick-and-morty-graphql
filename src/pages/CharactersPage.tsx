import { Characters } from "../components/Characters/Characters";
import { Spinner } from "../components/pure/Spinner";
import { Error } from "../components/pure/Error";
import { useLayout } from "../hooks/useLayout";

export const CharactersPage = () => {
  const { characters, error, ref, loading } = useLayout();

  if (error) return <Error message="Ha ocurrido un error." />;

  return (
    <>
      <div className="p-8 sm:p-12">
        <Characters characters={characters} />
        <span ref={ref}></span>
        {loading && <Spinner />}
      </div>
    </>
  );
};
