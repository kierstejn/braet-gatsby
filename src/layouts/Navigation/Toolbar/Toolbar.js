import React from 'react';

import * as styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';


const toolbar = ( props ) => (
    <header className={styles.Toolbar}>
			<div className={styles.Toolbar__Image}>
				<h2>Braet</h2>
				<p>- Vin, Kaffe og Brætspil</p>
			</div>
			<nav className={styles.NavigationItems}>
				<NavigationItems/>
			</nav>
			<div className={styles.DrawerToggle}>
				<DrawerToggle onClick={props.drawerToggleClicked} open={props.open}/>
			</div>
    </header>
);

export default toolbar;
