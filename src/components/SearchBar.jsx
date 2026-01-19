import "../css/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Buscar producto..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
