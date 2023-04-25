import React from "react"
import './App.css';
import Navbar from './components/Navbar/index';
import ItemListContainer from "./components/ItemListContainer/itemlistcontainer";
import Cards from "./components/Card/Cards";




function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos"/>
  <Cards/>
    </div>
  ); 
}

export default App;
