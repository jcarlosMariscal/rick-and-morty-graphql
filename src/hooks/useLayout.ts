import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { ICharacter, ICharactersData } from "../types/types";
import GET_CHARACTERS from "../graphql/queries/getCharacters.query";
import { useAppStore } from "../store/store";

export const useLayout = () => {
  const { searchName } = useAppStore();
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const { error, data, fetchMore, loading } = useQuery<ICharactersData>(
    GET_CHARACTERS,
    {
      variables: { page: page, name: searchName },
      notifyOnNetworkStatusChange: true,
    }
  );
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (data?.characters?.results) {
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        ...data.characters.results,
      ]);
    }
  }, [data]);
  useEffect(() => {
    if (searchName) {
      setCharacters([]);
      setPage(1);
    }
  }, [searchName]);

  useEffect(() => {
    if (isIntersecting && data?.characters?.info) {
      fetchMore({
        variables: { page: page + 1 },
      }).then(() => setPage(page + 1));
    }
  }, [isIntersecting, data, fetchMore, page]);
  return { ref, error, characters, loading };
};
