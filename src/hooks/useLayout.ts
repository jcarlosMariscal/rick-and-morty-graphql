import { useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { ICharacter, ICharactersData } from "../types/types";
import GET_CHARACTERS from "../graphql/queries/getCharacters.query";
import { AppContext } from "../context/AppContext";

export const useLayout = () => {
  const { searchName } = useContext(AppContext);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { error, data } = useQuery<ICharactersData>(GET_CHARACTERS, {
    variables: { page: page, name: searchName },
  });
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    const results = data?.characters.results;
    if (results) {
      setCharacters((prev) => [...prev, ...results]);
    }
  }, [data]);

  useEffect(() => {
    setCharacters([]);
    setPage(1);
  }, [searchName]);

  useEffect(() => {
    if (isIntersecting && data?.characters?.info) {
      setPage((prev) => prev + 1);
      setLoading(page <= data.characters.info.pages ? true : false);
    }
  }, [isIntersecting, data, page]);
  return { ref, error, characters, loading };
};
