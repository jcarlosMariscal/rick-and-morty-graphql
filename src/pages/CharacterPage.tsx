import { useQuery } from "@apollo/client";
import GET_CHARACTER from "../graphql/queries/getCharacter.query";
import { useParams } from "react-router-dom";
import { Character } from "../components/Character/Character";
import { Spinner } from "../components/pure/Spinner";

export const CharacterPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="p-4 sm:p-8 w-full flex justify-normal sm:justify-center">
      <Character character={data.character} />
    </div>
  );
};
