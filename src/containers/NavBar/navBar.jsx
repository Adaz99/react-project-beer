import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox"
import FilterButtons from "../../components/FilterButtons/FilterButtons";

const NavBar = ({ handleInput, searchTerm, handleOnClick, abvButton, classicButton, acidButton }) => {
  return (
    <div className="navBar">
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FilterButtons handleOnClick={handleOnClick} abvButton={abvButton} classicButton={classicButton} acidButton={acidButton}/>
    </div>
  );
};
export default NavBar;
