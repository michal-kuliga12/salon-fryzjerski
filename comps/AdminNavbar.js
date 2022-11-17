import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/comp-styles/AdminNavbar.module.scss'

const AdminNavbar = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.user_image} src="/user.png" width={128} height={128}></Image>
            <h1>PANEL ADMINA</h1>
            <Link className={styles.home_image} href="/">
                <Image src="/home.png" width={36} height={36}/>
            </Link>
        </div>
    );
}
 
export default AdminNavbar;