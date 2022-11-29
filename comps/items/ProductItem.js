import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Shop.module.scss"

const ProductItem = ({item,index}) => {
    return (
        <>
            <Link href={`/shop/${item._id}`} >
                <div className={styles.product__image_container}>
                    <Image className={styles.product__image} src={item.imageUrl} alt={"https://allefryz.pl"} layout="fill" objectFit="contain"  />
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