import React from "react";
import styles from './navbar.module.css'
import logo from '../assets/logo192.png'
function Navbar () {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <img src={logo} alt="react-logo" height="50px"/>
                <h1>ReactFacts</h1>
            </div>
            <h2>React Course - Project 1</h2>
        </nav>
    )
}

export default Navbar;