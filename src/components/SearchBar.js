const SearchBar = ({ search, setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="What emoji are you looking for ?"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
