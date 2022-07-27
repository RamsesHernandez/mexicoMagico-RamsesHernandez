import logo from './logo.svg';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings= { 'Aulex proximamente, esperalo.....' } />
    </div>
  );
}

export default App;
