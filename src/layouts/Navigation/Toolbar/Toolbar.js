import React from 'react';
import {Link} from 'gatsby'

import * as styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';


const toolbar = ( props ) => (
    <header className={styles.Toolbar}>
			<div className={styles.Toolbar__Image}>
				<Link to={"/"}>
					<h1>Braet</h1>
				</Link>
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
