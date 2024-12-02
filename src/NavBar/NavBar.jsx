import { NavBarLink } from "./NavBarLink";
import styles from './NavBarStyles.module.css'

export function NavBar() {
    return (
        <div className={styles.mainContainer}>
            <NavBarLink linkTo={'/'}>Home</NavBarLink>
            <NavBarLink linkTo={'/staticPages'}>Static Pages</NavBarLink>
        </div>
    )
}