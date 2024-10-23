import React from 'react';
import FetchData from './FetchData';

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

function Type({ id }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  
  const { data: pokemon, loading } = FetchData(url);
  if (loading) return <div>Loading...</div>;

  return (
    <div className='my-4'>
      <ul className='flex justify-center'>
        {pokemon.types.map((type, index) => {
          const typeColor = colours[type.type.name]
          return (
            <li
              style={{backgroundColor: typeColor}}
              className="p-2 text-xl rounded mx-2 text-center"
              key={index}
            >
              {type.type.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Type;
