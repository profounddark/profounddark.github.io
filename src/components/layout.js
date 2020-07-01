import React from 'react';
import Footer from './footer.js';
import Navbar from './navbar.js';

const style = {
    mainContainer: {
        position: "relative",
        minHeight: "100vh"
    },
    contentWrap: {
        paddingBottom: "2.5rem",
        maxWidth: "600px",
        margin: "1rem auto 0 auto"
    }
}

function Layout(props) {
    return (
        <div style={style.mainContainer}>
            <Navbar />

            <div style={style.contentWrap}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;