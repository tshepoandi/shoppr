import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './Components/Footer/footer';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory category="men"/>}/>
          <Route path="/womens" element={<ShopCategory category="womens"/>}/>
          <Route path="/kids" element={<ShopCategory category="kids"/>}/>
          <Route path="/product" elemen={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>  
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
       
      
  );
}

export default App;
