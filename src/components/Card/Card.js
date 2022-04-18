import React from 'react'
import './Card.css'

export const Card = (props) => {
    const {item:{id,img,mrp,discount,price,brand,categoryName}}=props
  return (
    <div className="card">
    <div className="card_Img_V">
    <img className="card_Img_V" src={img} alt="Saree 3"/>
    </div>
    <div className="card-details">
        <h5>{categoryName}</h5>
        <small>by {brand}</small>
        <div className="card-price">
        <span className="price_Before">
                {mrp}
            </span>
            <span className="price_After">
                {price}
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
    
  )
}