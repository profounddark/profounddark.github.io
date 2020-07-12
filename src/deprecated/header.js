import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from "./header.module.css";

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
        <header className={styles.header}>
            <h1 className={styles.pageTitle}>{siteData.site.siteMetadata.title}</h1>

        </header>
    )
}

export default Header;