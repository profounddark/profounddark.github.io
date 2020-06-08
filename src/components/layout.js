import React from 'react';
import Footer from './footer.js';
import Header from './header.js';

function Layout(props) {
    return (
        <div>
            <Header />
            <div>
                { props.children }
            </div>
            <Footer />
        </div>
    )
}

export default Layout;