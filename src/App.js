import React from "react"
import './App.css';
import Navbar from './components/Navbar/index';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cards from "./components/Card/Cards";
import ItemCount from "./components/ItemCount/ItemCount";





function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos"/>
      <ItemCount inital={1} stock={10} onAdd={(quantity) => console.log("Cantidad Agregada",quantity)}/>  
  <Cards/>
    </div>
  ); 
}

export default App;
