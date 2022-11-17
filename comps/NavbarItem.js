import Link from "next/link";
import styles from "../styles/comp-styles/Navbar.module.scss";

const NavbarItem = ({text,href,active}) => {
    return (
        <Link 
        className={(active ? styles.nav_listItem_active : styles.nav_listItem)}
        href={href}>
            {text}
        </Link>
    );
}
 
export default NavbarItem;