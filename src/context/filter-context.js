import { useContext, createContext } from "react";
import React, { useReducer } from "react";

import { products } from "./product-context";
import { sortReducer } from "../Reducer/sortReducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
const initailFilter = {
  sort: null,
  categories: {
    saree: false,
    dress: false,
    kurti: false,
    nightwear: false,
    western: false,
    skirt: false,
  },
  brands: {
    shangrilla: false,
    manthan: false,
    dnmx: false,
    vishal: false,
    mansarover: false,
  },
  priceRange: 5000,
};

const FilterProvider = ({ children }) => {
  const [Fstate, dispatch] = useReducer(sortReducer, initailFilter);

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

    const filterCategories = Object.keys(state.categories).find(
      (category) => state.categories[category]
    );

    const categoriesProduct = sortedProducts.filter((product) =>
      filterCategories ? state.categories[product.categoryName] : true
    );
    // return categoriesProduct;

    const filterBrands = Object.keys(state.brands).find(
      (brandlist) => state.brands[brandlist]
    );

    const brandsProduct = categoriesProduct.filter((product) =>
      filterBrands ? state.brands[product.brand] : true
    );

    const priceRangeProduct = brandsProduct.filter(
      (product) => product.price < state.priceRange
    );
    return priceRangeProduct;
  }
};

export { FilterProvider, useFilter, useProductFilter ,initailFilter};
