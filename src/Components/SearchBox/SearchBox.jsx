import "./SearchBox.scss"

const SearchBox = (props) => {
    
    const { handleInput, } = props


    return (
        <form >
          <input className="search-box"
            type="text"
            onChange={handleInput}
          />
        </form>
      );
    };
    
    export default SearchBox;