import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const styles = {
    header: {
        fontFamily: "Obidee Sans, sans-serif",
        fontSize: "4rem",
        fontVariant: "small-caps",
        padding: ".25rem 1.5rem",
        backgroundColor: "black",
        color: "white"
    }
}

function Header() {
    const siteData = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `);
    return (
        <header style={styles.header}>
            {siteData.site.siteMetadata.title}
        </header>
    )
}

export default Header;