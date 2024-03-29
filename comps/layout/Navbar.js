import Link from "next/link";
import NavbarItem from "./NavbarItem";
import {useState} from "react";
import styles from "../../styles/comp-styles/Navbar.module.scss"
import Image from "next/image"

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
    {
        text: "Sklep",
        href: "/shop"
    },
    {
        text: "Lokalizacja",
        href: "/location"
    },
]
const Navbar = () => {
    const [buttonActive, setButtonActive] = useState(0);
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_container}>
{/*------------ LOGO */}
                <div>
                    <h1>La<span style={{color:"gold"}}> Bella</span></h1>
                </div>
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
                    <li className={styles.nav_userImage}>
                        <Link href="/login">
                            <Image src="/navbarUser.png" width={32} height={32} alt="flaticon"/>
                        </Link>    
                    </li>
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
{/* ------------- */}
                {/* <Link href="/admin" id={buttonActive?styles.lock_active: styles.lock}>
                    <Image src="/lock.png" alt="flaticon.com" width={24} height={24} />
                </Link> */}
                
            </div>
        </nav>
    );
}
 
export default Navbar;