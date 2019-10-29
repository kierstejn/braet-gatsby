import React from 'react';
import {Link} from 'gatsby'

import * as styles from './NavigationItem.module.css';

const navigationItem = ( props ) => (
    <li className={styles.NavigationItem}>
		  <Link to={props.link}>
        <h2>{props.children}</h2>
      </Link>
    </li>
);

export default navigationItem;
