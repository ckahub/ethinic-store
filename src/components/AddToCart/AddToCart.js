import React from 'react'
import './AddToCart.css'

export const AddToCart = () => {
  return (
    <div className="card_Container">
    <div className="card_V">
    <div className="card_Img_V">
    <img className="card_Img_V" src="../assests/woman/saree3.jpg" alt="Saree 3"/>
    </div>
    <div className="card_Details">
        <h4>Saree</h4>
        <small>by KM Fashion</small>
        <div className="card_Price">
            <span class="price_After">
                Rs.1800
            </span>
            <span className="price_Before">
                Rs.3000
            </span>
            <span className="discount">
                (40% OFF)
            </span>
        </div>
        <button className="add2cart">
            <i className="material-icons">
                shopping_cart
            </i>
            <span>ADD TO CART</span>
        </button>
        <button className="wishlist">
            <i className="material-icons">
                favorite_border
            </i>
            <span>WISHLIST</span>
        </button>
    </div>                    
    </div>
    </div>
  )
}