import React, {Fragment} from 'react';

import * as styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={styles.NavigationItems}>
            <Fragment>
                <NavigationItem link="/menu/">Menu</NavigationItem>
				<NavigationItem link="/calender/">Kalender</NavigationItem>
            </Fragment>
    </ul>
);

export default navigationItems;
