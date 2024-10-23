import React from "react";
import Card from "./Card";

function List({ pokemon }) {
  return (
    <div className="flex flex-wrap justify-center">
      {pokemon.map((p) => (
        <Card key={p.name} pokemon={p} />
      ))}
      {pokemon.length === 0 && (
        <div className="text-xl">Try another search!</div>
      )}
    </div>
  );
}

export default List;
