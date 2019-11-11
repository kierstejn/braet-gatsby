import React from 'react'
import propTypes from "prop-types";
import * as styles from './MenuItemList.module.css';

const MenuItemList = (props) => {
    
    const {header} = props;

    return (
        <div className={styles.Container}>
            <h3 className={styles.Header}>{header}</h3>
            <div className={styles.Content}>
                {props.children}
            </div>
        </div>
    )
    
}
export default MenuItemList;