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
            {siteData.site.siteMetadata.title}
            
        </header>
    )
}

export default Header;