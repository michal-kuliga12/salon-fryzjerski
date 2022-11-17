import Link from "next/link";
import NavbarItem from "./NavbarItem";
import {useState} from "react";
import styles from "../styles/comp-styles/Navbar.module.scss"

const NavItems = [
    {
        text: "Rezerwacja",
        href: "/bookingSite"
    },
    {
        text: "O nas",
        href: "/"
    },
    {
        text: "Aktualności",
        href: "/news"
    },
    {
        text: "Galeria",
        href: "/gallery"
    },
]
const Navbar = () => {
    const [buttonActive, setButtonActive] = useState(0);
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_container}>
{/*------------ LOGO */}
                <Link href="/">
                    <h1>LOGO</h1>
                </Link>
{/*-------------Lista zawierająca linki do innych stron */}
                <ul className={(buttonActive? styles.nav_list_active:styles.nav_list)}>
                    <li className={styles.nav_listEl}><b>MENU</b></li>
                    {NavItems.map((item,index)=>{
                        return (
                            <li className={styles.nav_listEl} key={item.text}>
                                <NavbarItem {...item} /> 
                            </li>
                        );
                    })}
                </ul>
{/* ------------Poniżej mamy przycisk do otwierania menu tzw hamburger */}
                <div 
                className={(buttonActive? styles.nav_btn_active:styles.nav_btn)} 
                onClick={()=>{
                    setButtonActive(!buttonActive)
                    console.log({buttonActive})}}>
                    <span className={styles.nav_btnSpan}></span>
                    <span className={styles.nav_btnSpan}></span>
                    <span className={styles.nav_btnSpan}></span>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;