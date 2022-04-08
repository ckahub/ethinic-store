import React from 'react';
import { CategoriesNavbar } from '../components/CategoriesNavbar/CategoriesNavbar';
import { Navbar } from '../components/Navbar/Navbar';
import { SignUP } from '../components/SignUP/SignUP';


export const Register = () => {
  return (
    <div>
     <Navbar/>
     <CategoriesNavbar/>
     <SignUP/> 
    </div>
  )
}
