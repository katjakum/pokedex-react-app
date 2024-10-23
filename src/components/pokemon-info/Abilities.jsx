import React from "react";
import FetchData from "./FetchData";

function Abilities({ id }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const { data: pokemon, loading } = FetchData(url);
  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-md">
      <h3 className="text-2xl font-semibold">Abilities</h3>
      <ul className="list-disc list-inside">
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="capitalize text-xl">
            {ability.ability.name.replace("-", " ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Abilities;
