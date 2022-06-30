import React from 'react'
import './welcome.css'
import profile from "../images/profile.jpg";

const Welcome = ({ onTechnologyPress, onProjectPress, onProfilesPress }) => {
    return (
        <div className='container'>
            <div className='navBar'>
                <div className="navBar-item" onClick={() => onTechnologyPress()} >Technologies</div>
                <div className="navBar-item" onClick={() => onProjectPress()}>Projects</div>
                <div className="navBar-item" onClick={() => onProfilesPress()}>Profiles</div>
            </div>
            <div className="banner-container">
                <div className="banner-text-container">
                    <h1 className="banner-name">Pasindu Bhasura</h1>
                    <h4 className="banner-profession">- Software Engineer Undergraduate -</h4>
                </div>
                <img src={profile} className="profile-image" alt="profile" />
            </div>
        </div>
    )
}

export default Welcome;