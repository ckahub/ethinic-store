import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Card } from '../../components/Card/Card'
import { CategoriesNavbar } from '../../components/CategoriesNavbar/CategoriesNavbar'
import { Navbar } from '../../components/Navbar/Navbar'
import {  Filter } from '../../components/Filter/Filter'
import './Productpage.css'
import { useProduct } from '../../context/product-context'
import { useFilter,useProductFiter } from '../../context/filter-context'




export const Productpage = () => {
  const {products,setProduct}=useProduct();
  const {Fstate}=useFilter();
  const filterProducts=useProductFiter(Fstate,products);
  console.log(Fstate,filterProducts)
  const result=filterbyCategories(filterProduct,Fstate.categories);

  
  return (
     
     <div className="container">
       <Filter/>  
        <div className='card-Display'>
          { filterProducts && filterProducts.map(product=><Card item={product} key={product.id}/>)}

        </div>
     </div>  
  )
}
