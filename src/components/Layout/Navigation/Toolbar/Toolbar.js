import React from 'react';

import * as styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';


const toolbar = ( props ) => (
    <header className={styles.Toolbar}>
            <h2 className={styles.Toolbar__Image}>Braet</h2>
			<nav className={styles.NavigationItems}>
				<NavigationItems/>
			</nav>
			<DrawerToggle onClick={props.drawerToggleClicked} open={props.open}/>
    </header>
);

export default toolbar;
