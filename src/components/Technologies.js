import React from 'react';
import './technologies.css';
import { technologies } from '../data';


const Technologies = ({ technologyRef }) => {
    return (
        <div className="technologies-container" ref={technologyRef}>
            <h1>Technologies</h1>
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
            <h3 className="name">{name}</h3>
        </div>
    );
}

export default Technologies