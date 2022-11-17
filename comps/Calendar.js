import styles from "../styles/comp-styles/Calendar.module.scss"

const Calendar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <h1>MIESIĄC</h1>
            </div>
            <div className={styles.daySection}>
                <div className={styles.dayItem}>

                </div>
            </div>

        </div>
    );
}
 
export default Calendar;