import "./SearchBox.scss"

const SearchBox = (props) => {
    
    const { handleInput } = props


    return (
        <form className="search-box">
          <p>Search Beers!</p>
          <input 
            type="text"
            onChange={handleInput}
          />
        </form>
      );
    };
    
    export default SearchBox;