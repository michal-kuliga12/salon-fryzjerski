import Image from "next/image"
import styles from "../../styles/comp-styles/Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBlock}>
                <Image className={styles.infoImage} src="/Footer1.png" width={64} height={64} alt="flaticon.com"/>
                <div className={styles.infoText}>
                    <p><b>Lokalizacja</b></p>
                    <p>Akademicka 2/4</p>
                    <p>35-030 Rzeszów</p>
                </div>
            </div>
            <div className={styles.infoBlock}>
                <Image className={styles.infoImage} src="/Footer2.png" width={64} height={64} alt="flaticon.com"/>
                <div className={styles.infoText}>
                    <p><b>Kontakt</b></p>
                    <p>Właściciel salonu:</p>
                    <p>Michał Kuliga</p>
                    <p>+48 111 222 333</p>
                </div>
            </div>
            <div className={styles.infoBlock}>
                <Image className={styles.infoImage} src="/Footer3.png" width={64} height={64} alt="flaticon.com"/>
                <div className={styles.infoText}>
                    <p><b>Godziny otwarcia</b></p>
                    <p>Poniedziałek - Piątek</p>
                    <p>8:00 - 16:00</p>
                </div>
            </div>


        </div>
    )
}

export default Footer