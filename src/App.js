import React from "react"
import './App.css';
import Navbar from './components/Navbar/index';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cards from "./components/Card/Cards";





function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
  <Cards/>
    </div>
  ); 
}

export default App;
