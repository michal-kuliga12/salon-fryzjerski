import styles from "../styles/Location.module.scss"
import Head from "next/head";
const Location = () => {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Labella | Lokalizacja</title>
            </Head>
            <div className={styles.mapContainer}>
                <h2>Lokalizacja</h2>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.8837665014898!2d21.981984539492267!3d50.020068998922135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbb7252d8e71%3A0xc12adba96683eeb6!2sLa%20Bella%20-%20Salon%20fryzjerski%20Rzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1671223199046!5m2!1spl!2spl" allowFullScreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
            </div>

        </div>
    );
}
 
export default Location;