import React from 'react'

function MyPokemons({ seeMyPkmn, onSeeMyPkmn}) {
  return (
    <button onClick={onSeeMyPkmn} className={seeMyPkmn ? "btn btn-danger mb-3" : "btn btn-secondary mb-3"}>See My Pokemons</button>
  )
}

export default MyPokemons