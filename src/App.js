import React from "react"
import './App.css';
import Navbar from './components/Navbar/index';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemList from "./components/Card/ItemList";





function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
  <ItemList/>
    </div>
  ); 
}

export default App;
