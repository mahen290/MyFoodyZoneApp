import React from 'react';
import './FoodContainer.css';

function FoodContainer( { setSearch } ) {
  const handleSearchChange = (event) => {
    setSearch(event.target.value) 
  };
  return (
    <div>
       <div className = "main-container">
            <div className = "sub-container">
                <h2> Foody<span>Zone</span> </h2>
                <input placeholder = "Search Food Items" className = "sfi" onSearch = { handleSearchChange } />
            </div>
            <div className = "button-style">
                <button className = 'btn'> All </button>
                <button className = 'btn'> Breakfast </button>
                <button className = 'btn'> Lunch </button>
                <button className = 'btn'> Dinner </button>
            </div>
        </div>
    </div>
  );
}

export default FoodContainer;
