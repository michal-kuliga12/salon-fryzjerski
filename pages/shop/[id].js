import Image from "next/image";
import { useState } from "react";
import connectMongo from "../../lib/connectMongo";
import productModel from "../../models/product";
import styles from "../../styles/id_Shop.module.scss"

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
    const handleSubmit = async (e) => {
        const body = {
            klient: klient,
            data: date,
            usluga: service.nazwa,
            metoda: service.metoda,
            cena: service.koszt,
        }
        if (service && klient && date) {
            e.preventDefault();
            UseFetch("./api/routes/booking","POST",body)
            setBooked(true)
            setError(false)
        } else {
            alert("Należy uzupełnić wszystkie pola!")
            setBooked(false)
            setError(true)
        }
    }
    const [productAmount, setProductAmount] = useState(0)
    const [address, setAddress] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [city, setCity] = useState("")
    const [buyer, setBuyer] = useState("")
    return (
        <div className={styles.container}>
            <div className={styles.order_info_container}>
                <picture>
                    <Image src="/stylizacja1.jpg" width={500} height={500} layout="responsive"/>
                </picture>
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.type}</p>
                </div>
                <div className={styles.order_options_container}>
                    <div>
                        <div className={styles.order_options_block}>
                            <input
                                type="text"
                                required
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                                placeholder="Adres odbiorcy"></input>
                        </div>
                        <div className={styles.order_options_block}>
                            <input
                                type="text"
                                required
                                value={postalCode}
                                onChange={(e)=>setPostalCode(e.target.value)}
                                placeholder="Kod pocztowy"></input>
                            <input
                                type="text"
                                required
                                value={city}
                                onChange={(e)=>setCity(e.target.value)}
                                placeholder="Miasto"></input>
                        </div>
                        <div className={styles.order_options_block}>
                            <input
                                type="text"
                                required
                                value={buyer}
                                onChange={(e)=>setBuyer(e.target.value)}
                                placeholder="Dane odbiorcy"></input>
                        </div>
                        <div className={styles.order_options_block}>
                            <button onClick={()=>{
                                if (productAmount <= 0) setProductAmount(0)
                                else setProductAmount(productAmount-1)
                            }}>-</button>
                            <input
                                type="text"
                                required
                                value={productAmount}
                                onChange={(e)=>setProductAmount(e.target.value)}
                                placeholder="Ilość produktów"></input>
                            <button onClick={()=>{
                                if (productAmount < 0) setProductAmount(0)
                                else setProductAmount(productAmount+1)
                            }}>+</button>
                        </div>
                        <div className={styles.order_options_block}>
                            <button onSubmit={()=>{handleSubmit}}>Dalej</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.order_description_container}>
                {product.description}
            </div>
        </div>
    );
}
 
export default ProductDetails;