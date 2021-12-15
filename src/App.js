//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './Components/ItemCount';

const App = () => {
  return (
    <div className="App">
       <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route path='category/:categoryId' element={<ItemListContainer/>} />
            <Route path='detail/:paramId' element={<ItemDetailContainer />} />
            <Route path='count' element={<ItemCount/>} />
          </Routes>
        </BrowserRouter>    
  </div>
  );
}

export default App;
