import { NavBarLink } from "./NavBarLink";

export function NavBar() {
    return (
        <div>
            <NavBarLink linkTo={'/'}>Home</NavBarLink>
            <NavBarLink linkTo={'/staticPages'}>Static Pages</NavBarLink>
        </div>
    )
}