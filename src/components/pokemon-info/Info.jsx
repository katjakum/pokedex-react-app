import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Abilities from "./Abilities";
import HeightWeight from "./HeightWeight";
import Type from "./Type";
import Stats from "./Stats";
import DexEntry from "./DexEntry";
import LinkBulbapedia from "./LinkBulbapedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Info() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setPokemon(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="text-center flex items-center justify-center text-lg bg-[#aac1b5] h-screen">
        Loading... Please wait
      </div>
    );
  if (!pokemon)
    return <div className="text-center text-lg">Pokémon not found</div>;

  return (
    <div className="p-3 bg-[#aac1b5]">
      <div className="px-6 pt-4">
          <Link to="/pokedex">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-2xl transition-transform duration-200 transform hover:scale-110"
            />
          </Link>
        </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold capitalize">
          {pokemon.name} #{pokemon.id}
        </h1>

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          className="my-4 w-64 h-64 mx-auto bg-[#f0e8d9] rounded-full"
        />

        <div
          className="rounded-top"
          style={{ backgroundColor: "#f5f2ec", padding: "40px" }}
        >
          <Type id={pokemon.id} />

          <div className="mt-4 mb-6">
            <DexEntry id={pokemon.id} />
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-4 mb-6 max-w-lg mx-auto my-5 p-5 bg-[#f0e8d9] border-[#d0c7b6] rounded-md shadow-lg">
            <Abilities id={pokemon.id} />
            <HeightWeight id={pokemon.id} />
          </div>

          <div className="flex justify-center mt-4 mb-6">
            <Stats id={pokemon.id} />
          </div>

          <LinkBulbapedia pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}

export default Info;
