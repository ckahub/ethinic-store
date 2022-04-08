import "./App.css";
import React from 'react'
import logo from "./logo.png";
import {Homepage} from "./pages/Homepage/Homepage";
import {Productpage} from "./pages/Productpage/Productpage";
import {Wishlist} from "./pages/Wishlist/Wishlist";
import {LoginIN} from "./pages/Login/LoginIN";
import {Register} from "./pages/Register/Register";
import {Cart} from "./pages/Cart/Cart";
import {Link,Routes,Route} from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import { CategoriesNavbar } from "./components/CategoriesNavbar/CategoriesNavbar";


function App() {
  return (
  <div>
   
    <Navbar/>
      <CategoriesNavbar/>

    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/productpage" element={<Productpage />}/>
      <Route path="/wishlist" element={<Wishlist />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/loginin" element={<LoginIN />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
   
   
  </div>
  );
}

export default App;
