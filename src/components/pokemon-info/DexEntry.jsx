import React from "react";
import FetchData from "./FetchData";

function DexEntry({ id }) {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

  const { data: species, loading } = FetchData(url);
  if (loading) return <div>Loading...</div>;

  const dexEntry = species.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );

  return (
    <div className="max-w-lg mx-auto my-5 p-5 bg-[#f0e8d9] border-[#d0c7b6] rounded-md shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Pokédex Entry</h3>
      <p className="text-xl leading-relaxed">
        {dexEntry.flavor_text.replace(/\n/g, " ").replace(/\f/g, " ")}
      </p>
    </div>
  );
}

export default DexEntry;
