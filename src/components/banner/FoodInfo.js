import React from 'react';
import Search from './Search';
import './FoodInfo.css'

const FoodInfo = () => {
    return (
        <div className="foodinfo py-sm-3 text-center text-md-start">
            <div className="info">
                <h1 className="h2">Get Spicy Food by Ordering Online</h1>
                <p className="paragraph"> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="searchbar">
                <Search />
            </div>
        </div>
    )
}

export default FoodInfo;