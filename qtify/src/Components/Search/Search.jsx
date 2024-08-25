import './Search.css';

const Search = () => {
  return (
    <div className="search-box">
      <input placeholder="Search a album of your choice" className="text-box" />
      <div className="search-icon-box">
        <img src="./Assets/Searchicon.svg" alt="search" />
      </div>
    </div>
  );
};

export default Search;