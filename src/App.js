import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings= { 'Mexico Magico proximamente, esperalo.....' } />
    </div>
  );
}

export default App;
