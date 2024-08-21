export interface ICharacter {
  gender: "unknown" | "Male" | "Female" | "Genderless";
  id: number;
  image: string;
  name: string;
  status: "unknown" | "Alive" | "Dead";
  created: string;
  episode: string[];
  location: { name: string; url: string };
  origin: { name: string; url: string };
  species:
    | "unknown"
    | "Human"
    | "Alien"
    | "Humanoid"
    | "Poopybutthole"
    | "Mythological Creature"
    | "Animal"
    | "Robot"
    | "Cronenberg"
    | "Disease";
  type: string;
}

export interface ICharactersData {
  characters: {
    info: {
      pages: number;
    };
    results: ICharacter[];
  };
}
