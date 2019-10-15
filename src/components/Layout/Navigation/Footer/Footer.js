import React from 'react';
import './Footer.css'

const footer = () => {

    let footerStyle = {
        gridRow: 3,
        gridColumn: 1
    };

    return (
        <footer className={"Footer"} style={footerStyle}>
            Det her er en footer
        </footer>
    )
};

export default footer;
