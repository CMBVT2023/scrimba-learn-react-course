import { Page } from "./Page"

export function StaticPages() {
    let reactImage = new URL('../assets/react-logo.png', import.meta.url)

    return (
        <>
            <img src={reactImage} width={'40px'}/>
            <h1>Fun Facts About React</h1>
            <Page />
        </>
    )
}