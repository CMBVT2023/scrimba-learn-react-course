import { useLocation } from "react-router";
import { Link } from "react-router"
import styles from './NavBarStyles.module.css'

export function NavBarLink({ linkTo, children }) {
    const { pathname } = useLocation();

    return (
        <>
            {pathname != linkTo ? <Link className={styles.activeLink} to={linkTo}>{children}</Link> : <p className={styles.disabledLink}>{children}</p>}
        </>
    )
}