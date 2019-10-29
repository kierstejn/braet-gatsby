import React from 'react';
import * as styles from './Footer.module.css'
import TextField from '@material-ui/core/TextField';

const footer = () => {

    let footerStyle = {
        gridRow: 3,
        gridColumn: 1
    };

    return (
        <footer className={styles.Footer} style={footerStyle}>
            <div className={styles.FirstColumn}>
                <h2 className={styles.EmailHeader}>Nyheder fra braet</h2>
                <div className={styles.EmailForm}>
                    <input
                        className={styles.InputElement}
                        placeholder={"Email addresse.."}
                        type={"email"}
                        
                        autoComplete={false}
                        required={true}
                    />
                    <button
                        className={styles.Button}
                    >
                        <p>Tilmeld</p>
                    </button>
                </div>
                <hr noshade className={styles.Divider}/>
                <div className={styles.TextArea}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor condimentum lacinia quis vel eros donec ac odio. Id venenatis a condimentum vitae. Ultrices mi tempus imperdiet nulla. </p>
                </div>
                
            </div>
            <div className={styles.SecondColumn}>

            </div>
        </footer>
    )
};

export default footer;
