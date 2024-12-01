import { useLocation } from "react-router";
import { Link } from "react-router"

export function NavBarLink({ linkTo, children }) {
    const { pathname } = useLocation();

    return (
        <>
            {pathname != linkTo ? <Link to={linkTo}>{children}</Link> : <h2>{children}</h2>}
        </>
    )
}