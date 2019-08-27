import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ type, placeholder, handleOnChange }) => {
    return (
        <input className="search" type={type} placeholder={placeholder} onChange={handleOnChange} />
    );
};
