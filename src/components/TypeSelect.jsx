import React from "react";

function TypeSelect({ pokemonsTypes }) {


  return (
  
    <select className="form-select mb-3" aria-label="Default select example">
      <option selected>Select Type</option>
      {console.log(pokemonsTypes)}
      { pokemonsTypes.map(type => (
        <option value={type}>{type}</option>
      ))}

    </select>);
}



export default TypeSelect;
