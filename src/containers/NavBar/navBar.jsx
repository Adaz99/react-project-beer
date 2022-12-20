import "./NavBar.scss";
import SearchBox from "../../components/searchBox/SearchBox"
import FilterButtons from "../../components/filterButtons/FilterButtons";

const NavBar = ({ handleInput, searchTerm, handleOnClick }) => {
  return (
    <div className="navBar">
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FilterButtons handleOnClick={handleOnClick} />
    </div>
  );
};
export default NavBar;
