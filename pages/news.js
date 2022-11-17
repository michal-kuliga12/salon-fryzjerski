import styles from '../styles/News.module.scss'
import connectMongo from '../lib/connectMongo';
import newsModel from '../models/newsModel';
import NewsItem from '../comps/NewsItem';
import Image from 'next/image';
import DotPattern from "../comps/stylingProps/DotPattern"

const News = ({news}) => {
    return (
        <div className={styles.container}>
            <section className={styles.image__section}>
                <div className={styles.image__container}>
                    {/* <Image 
                        className={styles.image} 
                        src="/aktualnosci.jpg" 
                        layout="fill" 
                        objectFit='contain'
                        quality={100}/>     */}
                    <h1>AKTUALNOŚCI ZE ŚWIATA FRYZJERSTWA</h1>
                </div>
                <DotPattern />
            </section>
            <section className={styles.news__section}>
            {/* <p>Tutaj będą wyświetlane wszystkie bieżące aktualności odnośnie salonu, terminów otwarcia i nowych produktów.</p> */}
                <div className={styles.news__content}>
                    <div className={styles.news__items}>
                        {news.map((item,index)=>{
                            return (
                                <NewsItem item={item} index={index} />
                            );
                    })}
                    </div>
                </div>     

            </section>
        </div>
    );
}
 
export default News;

export const getServerSideProps = async () => {
    try {
        await connectMongo()
        const news = await newsModel.find()
        return {
            props: {
                news: JSON.parse(JSON.stringify(news)),
            },
        };
    } catch(error) {
        console.log(error)
        return {
            notFound: true,
        }
    }
}