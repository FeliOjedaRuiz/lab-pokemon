const SearchBar = ({ search, onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input className="form-control col-6 mb-2"
      type="text"
      value={search}
      onChange={handleChange}
      placeholder="Search a Pokemon..."
    />
  );
};

export default SearchBar;
