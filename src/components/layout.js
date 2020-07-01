import React from 'react';
import Footer from './footer.js';
import Navbar from './navbar.js';
import styles from './layout.module.css';


function Layout(props) {
    return (
        <div className={styles.mainContainer}>
            <Navbar />

            <div className={styles.contentWrap}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;