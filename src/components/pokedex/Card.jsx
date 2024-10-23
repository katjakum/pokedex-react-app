import React from "react";
import { Link } from "react-router-dom";

const colours = {
  normal: "#DCDBD4",
  fire: "#FAC799",
  water: "#BFD9FF",
  electric: "#F5F6CE",
  grass: "#D9DECB",
  ice: "#D3DBDD",
  fighting: "#DE8F4E",
  poison: "#AC8D94",
  ground: "#C9BDA5",
  flying: "#BED6DC",
  psychic: "#E3AFB4",
  bug: "#E7E6BA",
  rock: "#F3E2CE",
  ghost: "#B4A3C4",
  dragon: "#7C7D9D",
  dark: "#959293",
  steel: "#DADAD9",
  fairy: "#F0D5C9",
};

const getTypeColor = (type) => colours[type];

function Card({ pokemon }) {
  const typeColor = getTypeColor(pokemon.types[0]?.type.name);

  return (
    <div
      style={{ backgroundColor: typeColor }}
      className="border-4 border-[#7E9384] rounded-lg p-2 m-3 flex flex-col items-center transition-transform duration-200 transform hover:scale-105"
    >
      <Link to={`/pokemon/${pokemon.id}`} className="no-underline text-center">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          className="w-full h-36 object-contain"
        />
        <p className="mt-2 font-medium capitalize max-w-[150px] overflow-hidden max-h-[3em]">
          {pokemon.name} #{pokemon.id}
        </p>
      </Link>
    </div>
  );
}

export default Card;
