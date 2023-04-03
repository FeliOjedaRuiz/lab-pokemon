import { useState } from "react";

const Pokemon = ({ pokemon }) => {
  const [isMyPkmn, setIsMyPkmn] = useState(pokemon.isMyPkmn);

  const handleClick = () => {
    pokemon.isMyPkmn = !isMyPkmn
    setIsMyPkmn(!isMyPkmn)
  }

  return (
     <div className="card mb-3">
      <img src={pokemon.image} className="card-img-top" alt={pokemon.name.english}/>
      <div className="card-body">
        <h2 className="card-title">{pokemon.name.english}</h2>
        <p className="card-text">Type: {pokemon.type.join(" - ")}</p>
        <button onClick={handleClick} className={pokemon.isMyPkmn ? "btn btn-danger" : "btn btn-primary"}>My Pkmn</button>
      </div>
    </div>  
  );
};

export default Pokemon;
