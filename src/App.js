import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import Singleproduct from './pages/Singleproduct';
import { Toaster } from 'react-hot-toast';
import Category from './pages/Category';
import Categoryproduct from './pages/Categoryproduct';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/category' element={<Category />} />
          <Route path='/categoryproduct/:id' element={<Categoryproduct />} />
          <Route path='/singleproduct/:id' element={<Singleproduct />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Toaster />
      </Router>

    </>
  );
}

export default App;
