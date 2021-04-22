import react from "react";
import '../styles/Buttons.css'

function YesButton(){
    var ButtonText = "YES";

    return(
        <button className="YesButton">
            <div className="buttonText">{ButtonText}</div>
        </button>
    )
}

export default YesButton;