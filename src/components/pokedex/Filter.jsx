function Filter({
  searchTerm,
  setSearchTerm,
  types,
  generations,
  abilities,
  typeFilter,
  setTypeFilter,
  generationFilter,
  setGenerationFilter,
  abilityFilter,
  setAbilityFilter,
}) {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container px-4 pb-4 mx-auto">
      <div className="mb-4">
        <input
          className="p-2 w-full border border-gray-300 rounded-md"
          type="text"
          placeholder="Search Pokémon by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="flex flex-col">
          <label className="font-semibold mb-1">Type:</label>
          <select
            className="p-2 border border-gray-300 rounded-md"
            onChange={(e) => setTypeFilter(e.target.value)}
            value={typeFilter}
          >
            <option value=""></option>
            {types.map((type) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Generation:</label>
          <select
            className="p-2 border border-gray-300 rounded-md"
            onChange={(e) => setGenerationFilter(e.target.value)}
            value={generationFilter}
          >
            <option value=""></option>
            {generations
              .filter((gen, index) => index < 4)
              .map((gen) => (
                <option key={gen.name} value={gen.name}>
                  {gen.name}
                </option>
              ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-1">Ability:</label>
          <select
            className="p-2 border border-gray-300 rounded-md"
            onChange={(e) => setAbilityFilter(e.target.value)}
            value={abilityFilter}
          >
            <option value=""></option>
            {abilities.map((ability) => (
              <option key={ability.name} value={ability.name}>
                {ability.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
