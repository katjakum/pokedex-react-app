import React from "react";

function LinkBulbapedia({ pokemon }) {
  const link = `https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pokémon)`;
  return (
    <div>
      <p>
        If you are interested in learning more about {pokemon.name} I recomend
        checking out the{" "}
        <a className="underline underline-offset-4" href={link} target="_blank" rel="noopener noreferrer">
          <strong>Bulbapedia</strong>
        </a> for more information!
      </p>
    </div>
  );
}

export default LinkBulbapedia;
