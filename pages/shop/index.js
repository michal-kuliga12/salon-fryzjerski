import Image from "next/image";
import Link from "next/link";
import connectMongo from "../../lib/connectMongo";
import productModel from "../../models/product";
import styles from "../../styles/Shop.module.scss"
import ProductItem from "../../comps/items/ProductItem";
import { useState } from "react";
import Head from "next/head";

const Shop = ({ product }) => {
    const [customerType,setCustomerType] = useState(0)
    const [sortType,setSortType] = useState(0)
    return (
        <div className={styles.body}>
        <Head>
            <title>Labella | Sklep</title>
        </Head>
            <div className={styles.customer__container}>
                <h2>TYP ZAKUPÓW</h2>
                <div className={styles.customer__choosing}>
                    <Link className={!customerType?styles.customer__type__active:styles.customer__type} 
                        href="#"
                        onClick={()=>setCustomerType(0)}>
                    INDYWIDUALNY</Link>
                    <Link className={customerType?styles.customer__type__active:styles.customer__type} 
                        href="#"
                        onClick={()=>setCustomerType(1)}
                    >HURTOWY</Link>
                </div>
            </div>
            <div className={styles.sort__container}>
                <div className={styles.sort__item}>
                    <p className={sortType==0?styles.customer__type__active:styles.customer__type}
                        onClick={()=>setSortType(0)}>AKCESORIA</p></div>
                <div className={styles.sort__item}>
                    <p className={sortType==1?styles.customer__type__active:styles.customer__type}
                        onClick={()=>setSortType(1)}>STYLIZACJA</p></div>
                <div className={styles.sort__item}>
                    <p className={sortType==2?styles.customer__type__active:styles.customer__type}
                        onClick={()=>setSortType(2)}>PIELĘGNACJA</p></div>
            </div>
            <div className={styles.product__container}>
                {console.log(product)}
                {product.map((item,index)=>{
                    return (
                        <div key={index} className={styles.product__item}>
                            <ProductItem item={item} index={index}/>
                        </div>
                    )
                })}

            </div>
            
        </div>
    );
}
 
export default Shop;

export const getServerSideProps = async () => {
    try {
        await connectMongo()
        const product = await productModel.find()
        return {
            props: {
                product: JSON.parse(JSON.stringify(product)),
            },
        };
    } catch(error) {
        console.log(error)
        return {
            notFound: true,
        }
    }
}