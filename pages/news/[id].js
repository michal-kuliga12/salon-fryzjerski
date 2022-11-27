import Image from "next/image";
import connectMongo from "../../lib/connectMongo";
import newsModel from "../../models/news";
import styles from "../../styles/News.module.scss"
// export const getServerSideProps = async (context) => {
//     const { id } = context.query
//     await connectMongo()
//     const res = await newsModel.findOne({_id: id}) 
//     const news = await JSON.parse(JSON.stringify(res))
//     console.log(news.tytul)
//     return { props: { news }}
// }
export const getStaticPaths = async () => {
    await connectMongo()
    const res = await newsModel.find({})
    const data = await JSON.parse(JSON.stringify(res))
    const paths = data.map((item)=>{
        return {
            params: {id: item._id}
        }    
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id
    await connectMongo()
    const res = await newsModel.findOne({_id: id})
    const news = JSON.parse(JSON.stringify(res))
    return {
        props: { news: news}
    }
}

const NewsDetails = ({ news }) => {
    return (
        <div className={styles.newsDetails__container}>
            <picture className={styles.newsDetails__imageContainer}>
                <Image className={styles.newsDetails__image} src="/aktualnosci1.jpg" width={600} height={400} objectFit="contain" layout="responsive" />
            </picture>
            <article>
                <h2>{news.tytul}</h2>
                <p>{news.tresc}</p>
            </article>
        </div>
    );
}
 
export default NewsDetails;