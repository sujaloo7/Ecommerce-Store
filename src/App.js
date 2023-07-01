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
  
    const [address, setAddress] = useState('');

  // Function to handle the success callback of the geolocation API
  const handleSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getAddressFromCoordinates(latitude, longitude);
  };

  // Function to handle the error callback of the geolocation API
  const handleError = (error) => {
    console.error('Error getting current location:', error);
  };

  // Function to get the address from the coordinates using a geocoding API
  const getAddressFromCoordinates = (latitude, longitude) => {
    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat: latitude, lng: longitude };

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK' && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        console.error('Geocoder failed due to:', status);
      }
    });
  };

  // Function to handle the click event on the button
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  
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


   <div>
      <button onClick={handleClick}>Get Current Address</button>
      {address && <p>Current Address: {address}</p>}
    </div>
  
    </>
  );
}

export default App;
