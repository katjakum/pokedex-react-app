import React from "react";
import FetchData from "./FetchData";

function HeightWeight({ id }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const { data: pokemon, loading } = FetchData(url);
  if (loading) return <div>Loading...</div>;

  const heightCM = pokemon.height * 10;
  const weightKG = pokemon.weight / 10;

  return (
    <div className="max-w-md flex flex-wrap justify-center gap-4">
      <div>
        <h3 className="text-2xl font-semibold">Height:</h3>
        <p className="text-xl">
          {heightCM} cm / {Math.round(heightCM / 30.48)} ft
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Weight:</h3>
        <p className="text-xl">
          {weightKG} kg / {Math.round(weightKG * 2.20462)} lbs
        </p>
      </div>
    </div>
  );
}

export default HeightWeight;
