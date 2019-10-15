import React, {Fragment} from 'react';

import * as styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={styles.NavigationItems} onClick={props.on}>
            <Fragment>
                <NavigationItem link="/menu/">Menu</NavigationItem>
				<NavigationItem link="/news/">Nyheder</NavigationItem>
                <NavigationItem link="/info/">Info</NavigationItem>
            </Fragment>
    </ul>
);

export default navigationItems;
