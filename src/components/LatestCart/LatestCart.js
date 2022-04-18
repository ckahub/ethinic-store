import React from 'react'
import './LatestCart.css'

export const LatestCart = ({id,img,mrp,discount,price,brand,categoryName,collectionYear}) => {
  return (
    <div className="card-container">
    <div className="card_V">
    <div className="card_Img_V">
        <img className="card_Img_V" src={img} alt="ProductImage"/>
    </div>
    <div className="card_Badge">NEW</div>
    <div className="card_Details">
        <h4>{categoryName}</h4>
        <small>by {brand}</small>
        <div className="card-Price">
            <span className="price_After">
                {price}
            </span>
            <span className="price_Before">
                {mrp}
            </span>
            <span className="discount">
                ({discount} off)
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