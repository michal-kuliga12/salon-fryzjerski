import Image from "next/image";
import styles from "../../styles/comp-styles/AdminNews.module.scss"

const NewsItem = ({item,index}) => {
    const data = new Date(item.data)
    return (
        <div key={index} className={styles.news__item} >
            <div className={styles.news__itemLeft}>
                <p>{item.tytul}</p>
                <p>{item.autor}</p>
            </div>
            <p className={styles.news__itemRight}>
                {data.getDate()}/{data.getMonth()}/{data.getFullYear()}
            </p>
        </div>
    );
}
 
export default NewsItem;