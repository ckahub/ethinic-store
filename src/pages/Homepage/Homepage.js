import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import {Footer} from '../../components/Footer/Footer';
import {AddToCart} from '../../components/AddToCart/AddToCart';
import { CategoriesNavbar } from '../../components/CategoriesNavbar/CategoriesNavbar';
import { LatestCart } from '../../components/LatestCart/LatestCart';
import { Filter} from '../../components/Filter/Filter';


export const Homepage = () => {
  return (
    <div>
     <Navbar/>
     <CategoriesNavbar/>
     <Filter/>
     <AddToCart/>
     <LatestCart/>
     <Footer/>  
    </div>
  )
}
