export function Header({ styles }) {
    let reactImage = new URL('../assets/react-logo.png', import.meta.url)

    return (
        <header className={styles.headerContainer}>
            <img className={styles.reactImage} src={reactImage} alt='React Logo' />
            <nav className={styles.navBar}>
                <ul className={styles.navList}>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}