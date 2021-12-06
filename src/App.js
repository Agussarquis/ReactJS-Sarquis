//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
      <NavBar/>
      <ItemListContainer greeting={"Hola mis productos"}/>
      <ItemDetailContainer/>
  </div>
  );
}

export default App;
