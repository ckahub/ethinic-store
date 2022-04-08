import React from 'react'
import './Navbar.css'


export const Navbar = () => {
  return (
    <div>
        <nav className="navigation">
            <ul className="left_Brand">
                <a href="./homepage.html">Ethinic Wear</a>
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
