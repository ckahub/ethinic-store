import React from 'react'
import { AddToCart } from '../../components/AddToCart/AddToCart'
import { CategoriesNavbar } from '../../components/CategoriesNavbar/CategoriesNavbar'
import { Navbar } from '../../components/Navbar/Navbar'
import {  Filter } from '../../components/Filter/Filter'


export const Productpage = () => {
  return (
    <div>
     <Navbar/> 
     <CategoriesNavbar/> 
     <Filter/>
     
     <AddToCart/>
     
    </div>
  )
}
