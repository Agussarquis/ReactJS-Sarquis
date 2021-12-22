//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import CartContextProvider from './Context/CartContext';

const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
       <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route path='category/:categoryId' element={<ItemListContainer/>} />
            <Route path='detail/:paramId' element={<ItemDetailContainer />} />
            <Route path = "/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>      
  </div>
  );
}

export default App;
