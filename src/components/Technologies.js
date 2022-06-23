import React from 'react';
import './technologies.css';
import { technologies } from '../data';


function Technologies() {
    return (
        <div className="technologies-container">
            <h2>Technologies</h2>
            <div className="cards">
                {technologies.map((item, index) => {
                    return (
                        <TechnologyItem image={item.image} name={item.name} />
                    );
                })}
            </div>
        </div>
    )
}

const TechnologyItem = ({ image, name }) => {
    return (
        <div className="cards_item">
            <img alt={name} src={image} height="70%" className="tech-image" />
            <h4 className="name">{name}</h4>
        </div>
    );
}

export default Technologies