import React from 'react';
import {Footer} from "../../components/Footer/Footer"
import {Card} from '../../components/Card/Card';
import { LatestCart } from '../../components/LatestCart/LatestCart';
import {useProduct} from "../../context/product-context";
import { Filter} from '../../components/Filter/Filter';
import { Link } from 'react-router-dom';
import './../Homepage/Homepage.css'


export const Homepage = () => {

  const {products,setProducts}=useProduct();
  const latestProduct= products && products.filter(product=>product.collectionYear==="2022")
  return (
    
      <div className="featured">
                <img className="content" src="https://ethinicwear.netlify.app/assests/woman-categories/landing4.jpg"/>
                <div className="featured_brand" >Ethinic Wear
                <div className="featured_tag"> Beauty Inside</div>
                <button className="btn">
                    Explore
                </button>
            </div>
      <div className='card-Display'>
       
       

  
    
    {latestProduct && latestProduct.map(product=><LatestCart  key={product.id}  />)}
    </div>

       
    </div>
  )
}
