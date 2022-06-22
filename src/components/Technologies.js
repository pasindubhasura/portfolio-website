import React from 'react';
import './technologies.css';
import react from '../images/react.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import redux from '../images/redux.png';


function Technologies() {
    return (
        <div className="technologies-container">
            <h2>Technologies</h2>
            <div className="cards">
                <div className="cards_item">
                    <img alt="react" src={react} height="70%" className="tech-image" />
                    <h4 className="name">ReactJs</h4>
                </div>
                <div className="cards_item">
                    <img alt="node" src={node} height="70%" className="tech-image" />
                    <h4 className="name">NodeJs</h4>
                </div>
                <div className="cards_item">
                    <img alt="express" src={express} height="70%" className="tech-image" />
                    <h4 className="name">ExpressJs</h4>
                </div>
                <div className="cards_item">
                    <img alt="mongodb" src={mongodb} height="70%" className="tech-image" />
                    <h4 className="name">MongoDB</h4>
                </div>
                <div className="cards_item">
                    <img alt="html" src={html} height="70%" className="tech-image" />
                    <h4 className="name">HTML</h4>
                </div>
                <div className="cards_item">
                    <img alt="css" src={css} height="70%" className="tech-image" />
                    <h4 className="name">CSS</h4>
                </div>
                <div className="cards_item">
                    <img alt="js" src={js} height="70%" className="tech-image" />
                    <h4 className="name">JavaScript</h4>
                </div>
                <div className="cards_item">
                    <img alt="redux" src={redux} height="70%" className="tech-image" />
                    <h4 className="name">Redux</h4>
                </div>
            </div>
        </div>
    )
}

export default Technologies