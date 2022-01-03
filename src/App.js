//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Context/CartContext';
import NotificationContextProvider from './Context/NotificationContext';
import UserContextProvider from './Context/UserContext';
import Checkout from './Components/checkout/Checkout';
import DashBoardContainer from './Components/dashboard/DashboardContainer';

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <NotificationContextProvider>
          <CartContextProvider>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route exact path='/' element={<ItemListContainer/>}/>
                <Route path='category/:categoryId' element={<ItemListContainer/>} />
                <Route path='detail/:paramId' element={<ItemDetailContainer />} />
                <Route path = "/cart" element={<Cart/>} />
                <Route path = "/checkout" element={<Checkout/>} />
                <Route path = "/dashboard" element={<DashBoardContainer/>} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </NotificationContextProvider>
      </UserContextProvider>          
  </div>
  );
}

export default App;
