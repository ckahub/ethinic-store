import axios from "axios";
import { createContext ,useContext,useState,useEffect} from "react";
import React from 'react';


const ProductContext=createContext()

const useProduct=()=>useContext(ProductContext)

const ProductProvider=({children})=>{

    useEffect(()=>{

        (async ()=>{
            try{
                const response=await axios.get('api/products');
                setProducts(response.data.products)

            }
            catch(error){
                console.log('error from product-context')

            }
        })();

    },[]);


    const [products,setProducts]=useState();

    return(
    <ProductContext.Provider value={{products,setProducts}}>
        {children}
    </ProductContext.Provider>
    )

}
export {ProductProvider,useProduct}