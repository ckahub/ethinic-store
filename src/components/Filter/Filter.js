import React from 'react'
import './Filter.css'

export const Filter = () => {
  return (
    <div class="container">
    <aside class="filter">
        <ul class="list">
            <div class="list-heading">
                <span>Price</span>
                <button >Reset</button>
            </div>
            <label for="slider">
                <input class="filter-slider" type="range" min="5" max="100" value="1" />
            </label>
            <div class="list-heading">
                <span>Catagory</span>
            </div>
            <label class="list-label" for="checkbox1">
                <input class="checkbox" type="checkbox" />Saree
            </label>
            <label class="list-label" for="checkbox2">
                <input class="checkbox" type="checkbox" />Dress
            </label>
            <label class="list-label" for="checkbox1">
                <input class="checkbox" type="checkbox" />Kurti
            </label>
            <label class="list-label" for="checkbox2">
                <input class="checkbox" type="checkbox" />Western
            </label>
            <label class="list-label" for="checkbox1">
                <input class="checkbox" type="checkbox" />Skirt
            </label>
            <label class="list-label" for="checkbox2">
                <input class="checkbox" type="checkbox" />Night Wear
            </label>

            <div class="list-heading">
                <span>Sort by</span>
            </div>
            <label class="list-label" for="roundbox">
                <input type="radio" id="roundbox" name="price" />Price-High to Low
            </label>
            <label class="list-label" for="roundbox">
            <input type="radio" id="roundbox" name="price"/>Price-Low to High
            </label>
           


            <div class="list-heading">
                <span>Brands</span>
            </div>
            <label class="list-label" for="checkbox1">
                <input class="checkbox" type="checkbox" />Shangrilla
            </label>
            <label class="list-label" for="checkbox2">
                <input class="checkbox" type="checkbox" />Manthan
            </label>
            <label class="list-label" for="checkbox2">
                <input class="checkbox" type="checkbox" />DNMX
            </label>
            <label class="list-label" for="checkbox2">
                <input class="checkbox" type="checkbox" />Vishal
            </label>
            <label class="list-label" for="checkbox2">
                <input class="checkbox" type="checkbox" />Mansarover
            </label>
        </ul>        
    </aside>
    </div>
  );
};