import React from 'react';
import styles from "./navbar.module.css";
import { graphql, useStaticQuery } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";


function Navbar() {
    const siteQuery = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                menuLinks {
                    name
                    link
                }
            }
        }
    }
    `);
    return (
        <nav className={styles.navbar}>
            <span className={styles.navItem}><AniLink className={styles.link} activeClassName={styles.activeLink} fade to="/">{siteQuery.site.siteMetadata.title}</AniLink></span>
            <ul className={styles.navList}>
                {siteQuery.site.siteMetadata.menuLinks.map(navItem =>(
                    <li
                        key={navItem.name}
                        className={styles.navItem}
                    >
                        <AniLink className={styles.link} activeClassName={styles.activeLink} fade to={navItem.link}>
                            {navItem.name}
                        </AniLink>
                    </li>
                ))}
            </ul>
        </nav>

    );
}

export default Navbar;