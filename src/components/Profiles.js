import React from 'react'
import { profiles } from '../data';
import "./profiles.css";

const Profiles = ({ profileRef }) => {
    return (
        <div className="profile-container" ref={profileRef}>
            <h1 className="profile-title">Profiles</h1>
            <div className="profile-cards">
                {profiles.map((item, index) => {
                    return (
                        <ProfileItem image={item.image} name={item.name} url={item.url} />
                    );
                })}
            </div>
        </div>
    )
}

const ProfileItem = ({ name, image, url }) => {
    const itemPress = () => {
        window.open(url, "_blank");
    };

    return (
        <div className="profile-item" onClick={itemPress}>
            <img alt={name} src={image} className="profile-item-image" />
            <h3>{name}</h3>
        </div>
    );
}

export default Profiles