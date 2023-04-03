import { useEffect, useState } from "react";
import { getPokemons, getPokemonImage } from "./services/PokemonService";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import TypeSelect from './components/TypeSelect';
import MyPokemons from "./components/MyPokemons";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [seeMyPkmn, setSeeMyPkmn] = useState(false)

  useEffect(() => {
    getPokemons().then((pokemons) => {
      pokemons.forEach(pokemon => {
        pokemon.image = getPokemonImage(pokemon.id)
      });
      setPokemons(pokemons)});
  }, []);

  const pkmnTypes = pokemons.map(pkmn => (
    pkmn.type[0]
  ));
  
  const pkmnTypesAll = new Set(pkmnTypes);

  let pkmnTypesFiltered = [...pkmnTypesAll];

  
  const onSearch = (value) => {
    setSearch(value);
  };

  const onTypeSelect = (type) => {
    setTypeFilter(type)    
  };

  const onSeeMyPkmn = () => {
    setSeeMyPkmn(!seeMyPkmn)
  }


  

  


  const pokemonsToShow = pokemons
  .filter(p => p.name.english.toLowerCase().includes(search.toLowerCase()))
  .filter(p => typeFilter === "all" || p.type.includes(typeFilter))
  .filter(p => seeMyPkmn === false || p.isMyPkmn)
  


  return (
    <div className="App container mt-3 d-flex flex-column">
      <SearchBar search={search} onSearch={onSearch} />

      <TypeSelect pokemonsTypes={pkmnTypesFiltered} onTypeSelect={onTypeSelect} />

      <MyPokemons seeMyPkmn={seeMyPkmn} onSeeMyPkmn={onSeeMyPkmn}/>

      <PokemonList pokemons={pokemonsToShow} />
    </div>
  );
}

export default App;
