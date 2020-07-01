import React from 'react';
import styles from "./navbar.module.css";
import { Link, graphql, useStaticQuery } from 'gatsby';


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
            <p className={styles.navItem}><Link className={styles.link} activeClassName={styles.activeLink} to="/">{siteQuery.site.siteMetadata.title}</Link></p>
            <ul className={styles.navList}>
                {siteQuery.site.siteMetadata.menuLinks.map(navItem =>(
                    <li
                        key={navItem.name}
                        className={styles.navItem}
                    >
                        <Link className={styles.link} activeClassName={styles.activeLink} to={navItem.link}>
                            {navItem.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>

    );
}

export default Navbar;