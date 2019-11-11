import React from 'react'
import propTypes from "prop-types";
import * as styles from './WineItem.module.css';

const WineItem = (props) => {
    
    const {header, description, bottlePrice, glassPrice} = props;

    return (
        <div className={styles.Container}>
            <p className={styles.Header}>{header}</p>
            <p>{description && description}</p>
            <p className={styles.Price}>
                {glassPrice && <span>Glas - {glassPrice}</span>}
                {glassPrice && bottlePrice && <span className={styles.PriceDivider}>/</span>}
                {bottlePrice && <span>Flaske - {bottlePrice}</span>}
            </p>
        </div>
    )
    
}

WineItem.propTypes = {
    header: propTypes.string,
    description: propTypes.string.isRequired

}

export default WineItem;