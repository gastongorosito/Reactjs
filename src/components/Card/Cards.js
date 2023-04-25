import React from "react";
import Card from "./Card";
import camisetatit from "../assets/camisetatit.png";
import hoodie from "../assets/hoodie.png";
import shortblanco from "../assets/shortblanco.png";

const cards = [
  {
    id:1,
    title: "Camiseta Titular",
    image: camisetatit,
    text: "Camiseta Titular del primer equipo"
  },
  {
    id:2,
    title: "Short Blanco",
    image: shortblanco,
    text: "Short alternativo"
  },
  {
    id:3,
    title: "Hoodie",
    image: hoodie,
    text: "Nuevo buzo con bolsillos"
  }
]

function Cards () {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {
            cards.map(card => ( 
              <div className="col-lg-4" key={card.id}>
                <Card title={card.title} imageSource={card.image} text={card.text}/>
              </div>
            ))
            }

        </div>
    </div>
  )
}

export default Cards

