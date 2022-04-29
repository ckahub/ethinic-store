import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import {ProductProvider} from './context/product-context';
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      <FilterProvider>
      <App />
      </FilterProvider>
    </ProductProvider>
    
  </BrowserRouter>,
  document.getElementById("root")
);
