import "./App.css";
import React from 'react'
import logo from "./logo.png";
import {Homepage} from "./pages/Homepage";
import {Productpage} from "./pages/Productpage";
import {Wishlist} from "./pages/Wishlist";
import {LoginIN} from "./pages/LoginIN";
import {Register} from "./pages/Register";
import {Cart} from "./pages/Cart";
import {Link,Routes,Route} from 'react-router-dom';


function App() {
  return (
  <div>
    {/* <Link to="/">Home||</Link>
    <Link to="/">Product||</Link>
    <Link to="/">WishList||</Link>
    <Link to="/">Cart||</Link>
    <Link to="/">Login||</Link> */}

    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/product" element={<Productpage />}/>
      <Route path="/wishlist" element={<Wishlist />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/loginin" element={<LoginIN />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
   
  </div>
  );
}

export default App;
