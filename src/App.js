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
import useEffect from "react";

function App() {
  
  
    useEffect(() => {
    const askForLocationPermission = () => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          // Success callback
          (position) => {
            // User granted permission
            console.log('Latitude:', position.coords.latitude);
            console.log('Longitude:', position.coords.longitude);
            console.log(position)
          },
          // Error callback
          (error) => {
            // User denied permission or an error occurred
            console.error(error);

          }
        );
      } else {
        // Geolocation API is not supported
        console.error('Geolocation is not supported');
      }
    };

    askForLocationPermission();
  }, []);
  
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
