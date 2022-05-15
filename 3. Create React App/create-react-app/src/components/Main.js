import React from "react";
import styles from './main.module.css'
function Main () {
    return (
        <div class={styles.mainContainer}>
            <h1 className={styles.h1Main}>Fun facts about React</h1>
            <ol>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>
    )
}

export default Main;