import React from 'react'
import { Link } from 'react-router-dom'
import { Homepage } from '../../pages/Homepage/Homepage'
import './Navbar.css'




export const Navbar = () => {
  return (
    <div>
        <nav className="navigation">
            <ul className="left_Brand">
                <Link to="/">Ethinic Wear</Link>
            </ul>
            <ul className="right_Brand">
                <li><a className="active" href="./login.html">Login                         
                </a></li>
                <li><a className="active" href="./cart.html">
                    <span className="material-icons">shopping_cart</span>
                </a></li>   
                <li><a className="active" href="./wishlist.html">
                    <span className="material-icons">
                    favorite_border
                    </span>
                </a></li>   
            </ul>
        </nav>
    </div>
  )
}
