export function Header({styles}) {
    let reactImage = new URL('../assets/react-logo.png', import.meta.url)

    return (
        <header>
            <img src={reactImage} width={'40px'}/>
            <h1 className={styles.title}>Fun Facts About React</h1>
        </header>
    )
}