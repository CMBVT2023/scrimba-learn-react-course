export function Header({ styles }) {
    let reactImage = new URL('../assets/react-logo.png', import.meta.url)

    return (
        <header className={styles.headerContainer}>
            <div className={styles.infoContainer}>
                <img className={styles.reactImage} src={reactImage} alt='React Logo' />
                <h1>React Facts</h1>
            </div>
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