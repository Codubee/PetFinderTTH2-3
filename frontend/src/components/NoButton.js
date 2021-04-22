import react from "react";
import '../styles/Buttons.css'

function NoButton(){
    var ButtonText = "NO";

    return(
        <button className="NoButton">
            <div className="buttonText">{ButtonText}</div>
        </button>
    )
}

export default NoButton;