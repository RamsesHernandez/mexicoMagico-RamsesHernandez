//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
//import { Routes , Route } from "react-router-dom";
import Item from './components/Item/Item';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer /> */}
      <Item />
    </div>
  );
}

export default App;
