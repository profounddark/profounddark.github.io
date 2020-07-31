import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './footer.module.css';

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
        <footer className={styles.footer}>
            <p className={styles.paragraph}>©{siteData.site.siteMetadata.year} {siteData.site.siteMetadata.author} — Created using <a href="https://www.gatsbyjs.org/">GatsbyJS!</a></p>
        </footer>
    )
}

export default Footer;