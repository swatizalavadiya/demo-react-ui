import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './Search.css'

const Search = () => {
    return (
        <div className="search">
            <InputGroup className="mb-3 justify-content-sm-center">
                <FormControl
                placeholder="Enter Food Here"
                aria-label="food name"
                aria-describedby="basic-addon2"
                className="search-input"
                />
                <button id="button-addon2" className="btn-search">
                Search
                </button>
            </InputGroup>
        </div>
    )
}

export default Search;