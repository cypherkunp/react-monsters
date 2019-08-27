import React from 'react';
import './card.styles.css';

export const Card = ({ data }) => {
    return (
        <div className="card-container">
            <center>
                <img alt="monster" src={`https://robohash.org/${data.id}?set=set2&size=180x180`} />
                <h2>{data.name}</h2>
                <p>{data.email}</p>
            </center>
        </div>
    );
};
