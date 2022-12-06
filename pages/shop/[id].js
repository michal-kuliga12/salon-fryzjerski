import Image from "next/image";
import { useState } from "react";
import connectMongo from "../../lib/connectMongo";
import UseFetch from "../../lib/useFetch";
import productModel from "../../models/product";
import styles from "../../styles/id_Shop.module.scss"

// export const getServerSideProps = async (context) => {
//     const { id } = context.query
//     await connectMongo()
//     const res = await productModel.findOne({_id: id}) 
//     const product = await JSON.parse(JSON.stringify(res))
//     console.log(product.tytul)
//     return { props: { product }}
// }
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
    const [productAmount, setProductAmount] = useState(0)
    const [street, setStreet] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [city, setCity] = useState("")
    const [customer, setCustomer] = useState("")
    return (
        <div className={styles.container}>
            <div className={styles.order_info_container}>
                <picture>
                    <Image className={styles.order_image} src={product.imageUrl} width={500} height={500} objectFit="contain" alt="https://allefryz.pl"/>
                </picture>
                <div className={styles.order_options_container}>
                    <div className={styles.order_options_title}>
                        <h4>{product.name}</h4>
                        <p>{product.type}</p>
                    </div>
                    <div>
                        <div className={styles.order_options_address}>
                            <input
                                type="text"
                                required
                                value={street}
                                onChange={(e)=>setStreet(e.target.value)}
                                placeholder="Adres odbiorcy"></input>
                        </div>
                        <div className={styles.order_options_postal_city}>
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
                        <div className={styles.order_options_buyer}>
                            <input
                                type="text"
                                required
                                value={customer}
                                onChange={(e)=>setCustomer(e.target.value)}
                                placeholder="Imię i nazwisko, nazwa firmy"></input>
                        </div>
                        <div style={{textAlign:"center"}}><p>Ilość sztuk:</p></div>
                        <div className={styles.order_options_quantity}>
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
                        <div className={styles.order_options_button_container}>
                            <button className={styles.order_options_button} onClick={()=>{
                                const order_date = new Date
                                let realization_date = new Date
                                realization_date.setDate(realization_date.getDate()+3)
                                const address = `${street} ${postalCode} ${city}`
                                const body = {
                                    name:product.name,
                                    customer,
                                    address,
                                    price:product.price,
                                    quantity:productAmount,
                                    order_date,
                                    realization_date}
                                UseFetch("/api/routes/order","POST",body)
                            }}>
                                ZAMÓW</button></div>
                    </div>
                </div>
            </div>
            <div className={styles.order_description_container}>
                <p style={{marginBottom:"6px"}}><b>Opis produktu:</b></p>
                {product.description}
            </div>
        </div>
    );
}
 
export default ProductDetails;