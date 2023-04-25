import React, { useEffect, useState } from "react";
import getList from "../Products/getProducts";
import Cards from "../Card/Cards";

const ItemListContainer = () => {

  const [arryList, setArrayList] = useState([]);
 

  useEffect(() => {
    getList()
    .then((response) => setArrayList(response))
    .catch ((err) => console.error)
    .finally()
  }, [])
  console.log(arrayList);

  return (
    <div className="listContainer">
       <Cards products={arryList}/>
      /</div>
    
  )
}

export default ItemListContainer;
