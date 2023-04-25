import React from "react";
import Card from "./Card";
import camisetatit from "../assets/camisetatit.png";
import hoodie from "../assets/hoodie.png";
import shortblanco from "../assets/shortblanco.png";

const cards = ({ products}) => {
  
  return (
    <>
    {}
    </>
  );
}

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

