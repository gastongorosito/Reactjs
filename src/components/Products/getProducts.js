import React from "react";
const products = [
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

const getList = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve (products);
      }, 2000);
    })
  }

export default getList