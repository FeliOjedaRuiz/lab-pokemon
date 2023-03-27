import { useEffect, useState } from "react";
import { getPokemons } from "./services/PokemonService";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import TypeSelect from './components/TypeSelect';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const pokemonsToShow = pokemons
  .filter(p => p.name.english.toLowerCase().includes(search.toLowerCase()))

  const pkmnTypes = pokemons.map(pkmn => (
    pkmn.type[0]
  ));
  
  // const pkmnTypes = new Set(pkmnTypesAll);
  
  // const pkmnTypes = Object.values(pkmnTypes1)

  return (
    <div className="App container mt-3 d-flex flex-column">
      <SearchBar search={search} onSearch={handleSearch} />

      <TypeSelect pokemonsTypes={pkmnTypes}/>

      <PokemonList pokemons={pokemonsToShow} />
    </div>
  );
}

export default App;
