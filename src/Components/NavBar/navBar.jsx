import "./navBar.scss"
import SearchBox from "../SearchBox/SearchBox"


const NavBar = ({handleInput, searchTerm}) => {
return(
<div>
    <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
</div>



)



}
export default NavBar;