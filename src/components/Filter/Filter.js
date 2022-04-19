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
                <input className="checkbox" type="checkbox" checked={Fstate.categories["saree"]} onChange={()=>dispatch({type:"saree"}) } />Saree
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" checked={Fstate.categories["dress"]} onChange={()=>dispatch({type:"dress"}) }/>Dress
            </label>
            <label className="list-label" for="checkbox1">
                <input className="checkbox" type="checkbox" checked={Fstate.categories["kurti"]} onChange={()=>dispatch({type:"kurti"}) }/>Kurti
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" checked={Fstate.categories["western"]} onChange={()=>dispatch({type:"western"}) }/>Western
            </label>
            <label className="list-label" for="checkbox1">
                <input className="checkbox" type="checkbox" checked={Fstate.categories["skirt"]} onChange={()=>dispatch({type:"skirt"}) }/>Skirt
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" checked={Fstate.categories["nightwear"]} onChange={()=>dispatch({type:"nightwear"}) }/>Night Wear
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
                <input className="checkbox" type="checkbox" checked={Fstate.categories["shangrilla"]} onChange={()=>dispatch({type:"shangrilla"}) }/>Shangrilla
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" checked={Fstate.categories["manthan"]} onChange={()=>dispatch({type:"manthan"}) }/>Manthan
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" checked={Fstate.categories["dnmx"]} onChange={()=>dispatch({type:"dnmx"}) }/>DNMX
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" checked={Fstate.categories["vishal"]} onChange={()=>dispatch({type:"vishal"}) }/>Vishal
            </label>
            <label className="list-label" for="checkbox2">
                <input className="checkbox" type="checkbox" checked={Fstate.categories["mansarover"]} onChange={()=>dispatch({type:"mansarover"}) }/>Mansarover
            </label>
        </ul>        
    </aside>
  
  );
};