import React from 'react'
import './LatestCart.css'

export const LatestCart = () => {
  return (
    <div className="card_Container">
    <div className="card_V">
    <div className="card_Img_V">
        <img className="card_Img_V" src="#" alt="BlazerGrey"/>
    </div>
    <div className="card_Badge">NEW</div>
    <div className="card_Details">
        <h4>Blazer</h4>
        <small>by KM Fashion</small>
        <div className="card_Price">
            <span className="price_After">
                Rs.2450
            </span>
            <span className="price_Before">
                Rs.3499
            </span>
            <span className="discount">
                (30% OFF)
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

  );
};