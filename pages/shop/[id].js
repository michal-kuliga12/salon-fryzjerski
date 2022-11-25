import connectMongo from "../../lib/connectMongo";
import productModel from "../../models/product";

// // export const getServerSideProps = async (context) => {
// //     const { id } = context.query
// //     await connectMongo()
// //     const res = await newsModel.findOne({_id: id}) 
// //     const news = await JSON.parse(JSON.stringify(res))
// //     console.log(news.tytul)
// //     return { props: { news }}
// // }
export const getStaticPaths = async () => {
    await connectMongo()
    const res = await productModel.find({})
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
    const res = await productModel.findOne({_id: id})
    const product = JSON.parse(JSON.stringify(res))
    return {
        props: { product: product}
    }
}

const ProductDetails = ({ product }) => {
    console.log(product)
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    );
}
 
export default ProductDetails;