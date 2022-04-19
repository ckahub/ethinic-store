import { useContext, createContext } from "react";
import React, { useReducer } from "react";

import { products } from "./product-context";
import { sortReducer } from "../Reducer/sortReducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const [Fstate, dispatch] = useReducer(sortReducer, {
    sort: null,
    categories: {
      saree: false,
      dress: false,
      kurti: false,
      nightwear: false,
      western: false,
      skirt: false,
    },
    brand: {
      shangrilla: false,
      manthan: false,
      dnmx: false,
      vishal: false,
      mansarover: false,
    },
    priceRange: 0,
  });

  return (
    <FilterContext.Provider value={{ Fstate, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
// const filterbyCategories=(products,categories)=>{
//     products.filter((product)=>categories[products.categoryName])

// }
const useProductFilter = (state, products) => {
  if (products === undefined) return [];
  else {
    const sortedProducts = [...products].sort((first, second) =>
      state.sort !== null
        ? state.sort === "HIGH-TO-LOW"
          ? second.price - first.price
          : first.price - second.price
        : 0
    );

    const filterCategories=Object.keys(state.categories).find((category)=>state.categories[category])
    console.log(filterCategories)

    const categoriesProduct = sortedProducts.filter(
      (product) => !filterCategories? true: state.categories[product.categoryName]
    );
    return categoriesProduct;

    console.log(state)
  }
};

export { FilterProvider, useFilter, useProductFilter };
