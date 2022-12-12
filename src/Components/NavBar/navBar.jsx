import "./navBar.scss"
import SearchBox from "../SearchBox/SearchBox"
import FilterButtons from "../filterButtons/filterButtons"


const NavBar = ({handleInput, searchTerm, handleOnClick}) => {
return(
<div>
    <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
    <FilterButtons handleOnClick={handleOnClick}/>
</div>



)



}
export default NavBar;