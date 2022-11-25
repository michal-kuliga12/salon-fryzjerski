import connectMongo from "../../lib/connectMongo";
import newsModel from "../../models/news";

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
    console.log(news)
    return (
        <div>
            <h1>{news.tytul}</h1>
        </div>
    );
}
 
export default NewsDetails;