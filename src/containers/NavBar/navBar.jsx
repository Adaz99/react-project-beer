import "./navBar.scss";
import SearchBox from "../../Components/SearchBox/SearchBox"
import FilterButtons from "../../Components/filterButtons/filterButtons";

const NavBar = ({ handleInput, searchTerm, handleOnClick }) => {
  return (
    <div className="navBar">
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FilterButtons handleOnClick={handleOnClick} />
    </div>
  );
};
export default NavBar;
