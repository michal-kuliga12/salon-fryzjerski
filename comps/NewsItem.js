import Image from "next/image";
import Link from "next/link";
import styles from "../styles/News.module.scss"

const NewsItem = ({item,index}) => {
    return (
        <div key={index} className={styles.news__item} >
            <Link href={`/news/${index+1}`}>
                <Image src={`/aktualnosci${index+1}.jpg`} width={600} height={400}/>
                <div className={styles.news__itemInfo}>
                    <p>{item.tytul}</p>
                    <p>{item.autor}</p>
                </div>
            </Link>
        </div>
    );
}
 
export default NewsItem;