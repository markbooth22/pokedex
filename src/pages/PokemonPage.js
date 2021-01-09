import React from "react";
import Pokemon from "../components/Pokemon/Pokemon";

const scyther = {
  id: 123,
  name: "Scyther",
  sprites: {
    "front-default":
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  },
  types: [
    {
      type: {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/",
      },
    },
    {
      type: {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/",
      },
    },
  ],
};

const PokemonPage = (props) => {
  return (
    <div className="PokemonPage">
      <Pokemon pokemon={scyther} />
    </div>
  );
};

export default PokemonPage;
