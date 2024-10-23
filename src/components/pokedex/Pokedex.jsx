import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "./List";
import { MagnifyingGlass } from "react-loader-spinner";
import Filter from "./Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Pokedex() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=493";

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [generations, setGenerations] = useState([]);
  const [generationSpecies, setGenerationSpecies] = useState([]);

  const [typeFilter, setTypeFilter] = useState("");
  const [generationFilter, setGenerationFilter] = useState("");
  const [abilityFilter, setAbilityFilter] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      const pokemonList = res.data.results;

      const data = await Promise.all(
        pokemonList.map(async (p) => {
          const response = await axios.get(p.url);
          return response.data;
        })
      );

      setPokemon(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchFilterData = async () => {
    try {
      const typeRes = await axios.get("https://pokeapi.co/api/v2/type");
      setTypes(typeRes.data.results);

      const abilityRes = await axios.get(
        "https://pokeapi.co/api/v2/ability?limit=500"
      );
      setAbilities(abilityRes.data.results);

      const generationRes = await axios.get(
        "https://pokeapi.co/api/v2/generation"
      );
      setGenerations(generationRes.data.results);
    } catch (error) {
      console.error("Error fetching filter options:", error);
    }
  };

  const fetchGenerationSpecies = async (generationUrl) => {
    try {
      const res = await axios.get(generationUrl);
      const speciesList = res.data.pokemon_species.map(
        (species) => species.name
      );
      setGenerationSpecies(speciesList);
    } catch (error) {
      console.error("Error fetching generation species:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchFilterData();
  }, []);

  useEffect(() => {
    if (generationFilter) {
      const generationUrl = `https://pokeapi.co/api/v2/generation/${generationFilter}`;
      fetchGenerationSpecies(generationUrl);
    } else {
      setGenerationSpecies([]);
    }
  }, [generationFilter]);

  if (loading) {
    return (
      <div className="bg-[#90a399] flex flex-col items-center justify-center text-center h-screen">
        <MagnifyingGlass
          color="#706362"
          glassColor="#d3e0ed"
          loading={loading}
        />
        <p>Searching for pokemons...</p>
      </div>
    );
  }

  let filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (typeFilter) {
    filteredPokemon = filteredPokemon.filter((p) =>
      p.types.some((type) => type.type.name === typeFilter)
    );
  }

  if (generationSpecies.length > 0) {
    filteredPokemon = filteredPokemon.filter((p) =>
      generationSpecies.includes(p.species.name)
    );
  }

  if (abilityFilter) {
    filteredPokemon = filteredPokemon.filter((p) =>
      p.abilities.some((ability) => ability.ability.name === abilityFilter)
    );
  }

  return (
    <>
      <div className="bg-[#aac1b5] min-h-screen">
        <div className="px-6 p-4 flex items-center gap-4">
          <Link to="/">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-2xl transition-transform duration-200 transform hover:scale-110"
            />
          </Link>
        </div>

        <div>
          <Filter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            types={types}
            generations={generations}
            abilities={abilities}
            setTypeFilter={setTypeFilter}
            setGenerationFilter={setGenerationFilter}
            setAbilityFilter={setAbilityFilter}
            typeFilter={typeFilter}
            generationFilter={generationFilter}
            abilityFilter={abilityFilter}
          />
        </div>

        <List pokemon={filteredPokemon} />
      </div>
    </>
  );
}

export default Pokedex;
