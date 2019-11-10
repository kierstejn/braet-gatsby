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
           
                <div className={styles.TextArea}>
                    <p>Kom ind på Braet, Københavns nye Vin-, kaffe- og brætspilsbar med byttebibliotek, brugte vinyler og retrokjoler.</p>
                </div>
                <hr noshade className={styles.Divider}/>
                <h2 className={styles.EmailHeader}>Nyheder fra breat</h2>
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
                
                
            </div>
            <div className={styles.SecondColumn}>

            </div>
        </footer>
    )
};

export default footer;
