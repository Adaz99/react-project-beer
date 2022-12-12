import "./filterButtons.scss"


const filterButtons = (props) => {
    const { handleOnClick  } = props
    return (
        <div >
          <button onClick={handleOnClick}> High Abv 6% </button>
          <button onClick={handleOnClick}> Classic Range</button>
          <button onClick={handleOnClick}> Acidic </button>

        </div>
        
      );
    };


export default filterButtons;