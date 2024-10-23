import React from 'react';
import FetchData from './FetchData';

function Stats({ id }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  
  const { data: pokemon, loading } = FetchData(url);
  if (loading) return <div>Loading...</div>;
  
  const maxStatValue = 255;

  const getStatColor = (statName) => {
    if (statName === "hp") return 'bg-[#d4a18e]';
    if (statName === "attack") return 'bg-[#5e857d]';
    if (statName === "defense") return 'bg-[#e27258]';
    if (statName === "special-attack") return 'bg-[#b4d6d9]';
    if (statName === "special-defense") return 'bg-[#ffb8b8]';
    if (statName === "speed") return 'bg-[#ffcc32]';
    return 'bg-gray-500';
  };
   
  return (
    <div className="max-w-lg p-4 bg-[#f0e8d9] border-[#d0c7b6] shadow-lg rounded-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Base Stats</h2>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li key={index} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="font-medium capitalize">{stat.stat.name}</span>
              <span>{stat.base_stat}</span>
            </div>
            <div className="bg-[#c7bfaf] h-4 rounded-full">
              <div
                className={`h-full ${getStatColor(stat.stat.name)} rounded-full`}
                style={{
                  width: `${(stat.base_stat / maxStatValue) * 100}%`,
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}  

export default Stats;
