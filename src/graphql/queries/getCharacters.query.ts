import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
      }
      results {
        id
        name
        gender
        status
        image
      }
    }
  }
`;

export default GET_CHARACTERS;
