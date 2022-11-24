import Image from 'next/image';
import Link from 'next/link';
import UseFetch from '../lib/useFetch';
import styles from '../styles/comp-styles/AdminNavbar.module.scss'
import fetchJson, { FetchError } from '../lib/fetchJson';
import useUser from '../lib/useUser';
import { useRouter } from 'next/router';

const AdminNavbar = () => {
    const { user, mutateUser } = useUser();
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Image className={styles.user_image} src="/user.png" width={128} height={128} alt="flaticon.com"></Image>
            <h1>PANEL ADMINA</h1>
            <button className={styles.home_image} href="/api/routes/logout" 
            onClick={async (event)=>{
                event.preventDefault
                mutateUser(
                    await fetchJson("/api/routes/logout", {method: "POST"}),
                    false
                );
                router.push("/")
            }}>
                <Image src="/home.png" width={36} height={36} alt="flaticon.com"/>
            </button>
        </div>
    );
}
 
export default AdminNavbar;