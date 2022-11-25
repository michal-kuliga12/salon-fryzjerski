import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Shop.module.scss"

const ProductItem = ({item,index}) => {
    return (
        <>
            <Link href={`/shop/${item._id}`} >
                <div className={styles.product__image}>
                    <Image src={"/stylizacja1.jpg"} alt={"https://balmainhair.com.pl/"} width={256} height={256}/>
                </div>
                <div className={styles.product__info}>
                    <div>{item.name}</div>
                    <div className={styles.product__infoBottom}>
                        <div>{item.type}</div>
                        <div>{item.price} zł</div>
                    </div>
                </div>
            </Link>
        </>
    );
}
 
export default ProductItem;