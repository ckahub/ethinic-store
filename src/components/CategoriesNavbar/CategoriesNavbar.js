import React from 'react'
import './CategoriesNavbar.css'

export const CategoriesNavbar = () => {
  return (
    <nav className="nav2">
    <ul>
        <li><a href="./homepage.html">Home</a></li>
        <li><a href="./productpage.html">  Saree</a>
            <ul>
                <li><a href="./productpage.html">  Banarasi Saree </a></li>
                <li><a href="./productpage.html">Dyed Saree</a></li>
                <li><a href="./productpage.html">Printed Saree</a></li>
                <li><a href="./productpage.html">Silk Saree</a></li>
            </ul>
        </li>
        <li><a href="./productpage.html">  Kurti </a></li>
        <li><a href="./productpage.html">  Western  </a></li>
        <li><a href="./productpage.html">  Nightwear  </a></li>
        
    </ul>
</nav>

  )
}