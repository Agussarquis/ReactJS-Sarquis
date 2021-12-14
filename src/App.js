//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemCount from './Components/ItemCount';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route path='category/:categoryId' element={<ItemListContainer/>} />
            <Route path='detail/:paramId' element={<ItemDetailContainer />} />
            <Route path='count' element={<ItemCount/>} />
          </Switch>
        </BrowserRouter>    
  </div>
  );
}

export default App;
