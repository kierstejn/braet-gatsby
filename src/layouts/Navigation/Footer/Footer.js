import React from 'react';
import * as styles from './Footer.module.css'

const footer = () => {

    let footerStyle = {
        gridRow: 3,
        gridColumn: 1
    };

    return (
        <footer className={styles.Footer} style={footerStyle}>
            <div className={styles.FirstColumn}>
                <div className={styles.TextArea}>
                    dfsdfssffsdfdsfsd
                </div>
            </div>
            <div className={styles.SecondColumn}>

            </div>
        </footer>
    )
};

export default footer;
