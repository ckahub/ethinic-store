import { useContext,createContext } from "react";
import React ,{useReducer} from "react";

import { products } from "./product-context";
import { sortReducer } from "../Reducer/sortReducer";


const FilterContext=createContext();
const useFilter=()=>useContext(FilterContext);



const FilterProvider=({children})=>{
    
    const [Fstate,dispatch]=useReducer(sortReducer,{sort:null,categories:[],brand:[],priceRange:0})

   return( <FilterContext.Provider value={{Fstate,dispatch}}>
        {children}
    </FilterContext.Provider>
    )
}
const useProductFiter=(state,products)=>{
    if(products===undefined) return []
    else{
    const sortedProducts=[...products].sort((first,second)=>state.sort !== null
        ? state.sort === "HIGH-TO-LOW"
          ? second.price - first.price
          : first.price - second.price
        : 0)
        return sortedProducts;
    }

}

export {FilterProvider,useFilter,useProductFiter}
