import React from 'react'
import { Navbar } from '../components/Navbar/Navbar';
import { Login } from '../components/Login/Login';
import { CategoriesNavbar } from '../components/CategoriesNavbar/CategoriesNavbar';


export const LoginIN = () => {
  return (
    <div>
     <Navbar/>
     <CategoriesNavbar/>
     <Login/> 
    </div>
  )
}
