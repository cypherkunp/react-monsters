import React from 'react';
import './card-list.styles.css';
import { Card } from './../card/card.component';

export const CardList = ({ dataList }) => {
    return (
        <div className="card-list">
            {dataList.map((monster, index) => (
                <Card key={index} data={monster} />
            ))}
        </div>
    );
};
