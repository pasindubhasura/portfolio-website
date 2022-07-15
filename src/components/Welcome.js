import React from 'react'
import './welcome.css'
import profile from "../images/profile.jpg";
import menu from "../images/menu.png";

const Welcome = ({ onTechnologyPress, onProjectPress, onProfilesPress }) => {
    const menuPress = () => {
        const mobileMenu = document.querySelector(".navBar-mobile");
        const menu = document.querySelector(".navBar");
        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
            menu.style["boxShadow"] = "0px 4px 33px -17px rgba(105, 105, 105, 1)";
        } else {
            mobileMenu.style.display = "flex";
            menu.style["boxShadow"] = "none";
        }
    }

    return (
        <div className='container'>
            <div className='navBar'>
                <div className="navBar-item" onClick={() => onTechnologyPress()} >Technologies</div>
                <div className="navBar-item" onClick={() => onProjectPress()}>Projects</div>
                <div className="navBar-item" onClick={() => onProfilesPress()}>Profiles</div>
                <button type="button" className="menu-icon-button" onClick={menuPress}>
                    <img src={menu} className="menu-icon" />
                </button>
            </div>
            <div className='navBar-mobile' style={{ display: "hidden" }}>
                <div className="navBar-item-mobile" onClick={() => onTechnologyPress()} >Technologies</div>
                <div className="navBar-item-mobile" onClick={() => onProjectPress()}>Projects</div>
                <div className="navBar-item-mobile" onClick={() => onProfilesPress()}>Profiles</div>
            </div>
            <div className="banner-container">
                <div className="banner-text-container">
                    <h1 className="banner-name">Pasindu Bhasura</h1>
                    <h4 className="banner-profession">- Software Engineer Undergraduate -</h4>
                    <p className="banner-description">Software engineer undergraduate who is passionate and curious about developing and programming. Highly motivated with a willingness to learn about new technologies with a can-do mindset.</p>
                </div>
                <img src={profile} className="profile-image" alt="profile" />
            </div>
        </div>
    )
}

export default Welcome;