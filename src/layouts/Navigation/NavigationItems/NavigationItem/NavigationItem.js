import React from 'react';
import {Link} from 'gatsby'

import * as styles from './NavigationItem.module.css';

const navigationItem = ( props ) => (
    <li className={styles.NavigationItem}>
		  <Link to={props.link}>
        <div>{props.children}</div>
      </Link>
    </li>
);

export default navigationItem;
