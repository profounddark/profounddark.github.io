import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const styles = {
    footer: {
        position: "absolute",
        bottom: "0",
        height: "2.5rem",
        width: "100%",
        backgroundColor: "black",
        fontFamily: "Obidee Sans, sans-serif",
        fontSize: "1.5rem",
        color: "white",
        margin: "0"
    },
    paragraph: {
        padding: "0.5rem",
        textAlign: "center"
    }
}

function Footer() {
    const siteData = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author,
                year
            }
        }
    }
    `);
    return (
        <footer style={styles.footer}>
            <p style={styles.paragraph}>©{siteData.site.siteMetadata.year} {siteData.site.siteMetadata.author} — Created using Gatsby.js!</p>

        </footer>
    )
}

export default Footer;