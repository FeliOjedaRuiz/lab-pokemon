import React from "react";

function TypeSelect({ pokemonsTypes, onTypeSelect }) {
  const handleselect= (e) => {
    onTypeSelect(e.target.value);
  };

  return (  
    <select onChange={handleselect} className="form-select mb-3" aria-label="Default select example">
      <option value="all" >See all types</option>
      { pokemonsTypes.map(type => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  );
}


export default TypeSelect;
