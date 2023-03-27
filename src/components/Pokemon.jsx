import { useState } from "react";

const Pokemon = ({ pokemon }) => {
  const [isMyPokemon, setIsMyPokemon] = useState(pokemon.isMyPokemon);

  return (
    <div className="card mb-3">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{pokemon.name.english}</h2>
        <p className="card-text">Type: {pokemon.type.join(" - ")}</p>
        <button href="#" className="btn btn-primary">My Pkmn</button>
      </div>
    </div>  
  );
};

export default Pokemon;
