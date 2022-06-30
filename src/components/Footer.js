import React, { useEffect, useState } from 'react'
import "./footer.css";

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="footer">© {year} All rights reserved. Built by Pasindu.</div>
    )
}

export default Footer