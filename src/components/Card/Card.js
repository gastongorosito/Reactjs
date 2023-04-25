import React from "react";
import camisetatit from "../assets/camisetatit.png"


function Card () {
    return (
        <div className="card" >
            <div className= "card-body">
                <img className="img-fluid" src={camisetatit}/>
                <h4 className="card-title"> MyTitle</h4>
                <p className="card-text">lasdaksdjaskdhashdkajshdakjhdjkhasjdhajhds</p>
            </div>

        </div>
    )
}

export default Card