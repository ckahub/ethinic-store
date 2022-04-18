import React from 'react'
import './Filter.css'
import { FilterProvider,useFilter } from '../../context/filter-context';

export const Filter = () => {
    const {Fstate,dispatch}=useFilter();

    
  return (
    
    <aside className="filter">
        <ul className="list">
            <div className="list-heading">
                <span>Price</span>
                <button >Reset</button>
            </div>
            <label for="slider">
                <input className="filter-slider" type="range" min="5" max="100"  />
            </label>
            <div className="list-heading">
                <span>Catagory</span>
            </div>
            <label className="list-label" for="checkbox1">
                <input className="checkbox" type="checkbox" />Saree
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" />Dress
            </label>
            <label className="list-label" for="checkbox1">
                <input className="checkbox" type="checkbox" />Kurti
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" />Western
            </label>
            <label className="list-label" for="checkbox1">
                <input className="checkbox" type="checkbox" />Skirt
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" />Night Wear
            </label>

            <div className="list-heading">
                <span>Sort by</span>
            </div>
            <label className="list-label" for="roundbox">
                <input type="radio" id="roundbox" name="price" checked={Fstate.sort==="HIGH-TO-LOW"} onChange={()=>dispatch({type:"HIGH-TO-LOW"})} />Price-High to Low
            </label>
            <label className="list-label" for="roundbox">
                <input type="radio" id="roundbox" name="price" checked={Fstate.sort==="LOW-TO-HIGH"} onChange={()=>dispatch({type:"LOW-TO-HIGH"})} />Price-Low to High
            </label>
           


            <div className="list-heading">
                <span>Brands</span>
            </div>
            <label className="list-label" for="checkbox1">
                <input className="checkbox" type="checkbox" />Shangrilla
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" />Manthan
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" />DNMX
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" />Vishal
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" />Mansarover
            </label>
        </ul>        
    </aside>
  
  );
};