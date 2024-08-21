import { useQuery } from "@apollo/client";
import GET_CHARACTERS from "../graphql/queries/getCharacters.query";
import { Characters } from "../components/Characters/Characters";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "../components/pure/Spinner";
import { Error } from "../components/pure/Error";
import { Pagination } from "../components/pure/Pagination";
import { ICharactersData } from "../types/types";
import { AppContext } from "../context/AppContext";
// import { Button } from "../components/pure/Button";

export const CharactersPage = () => {
  const { searchName } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { loading, error, data } = useQuery<ICharactersData>(GET_CHARACTERS, {
    variables: { page: currentPage, name: searchName },
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchName]);
  if (loading) return <Spinner />;
  if (error) return <Error message="Ha ocurrido un error." />;

  return (
    <div className="p-8 sm:p-12">
      {/* <Button>s</Button>
      <Button intent={"secondary"}></Button> */}

      <Characters characters={data!.characters.results} />
      <Pagination
        currentPage={currentPage}
        totalPages={data!.characters.info.pages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
