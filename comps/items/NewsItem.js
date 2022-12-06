import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/News.module.scss"

const NewsItem = ({item,index}) => {
    return (
        <>
            <Link href={`/news/${item._id}`}>
                <div className={styles.news__item}>
                    <div className={styles.news__item_image}>
                        <Image src={item.imageUrl} width={600} height={400} layout="responsive"/>
                    </div>
                    <div className={styles.news__item_info}>
                        <p>{item.tytul}</p>
                        <p>{item.autor}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}
 
export default NewsItem;