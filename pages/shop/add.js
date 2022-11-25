import { useState } from "react";
import styles from "../../styles/comp-styles/AdminAddNewsMenu.module.scss"

const ProductAdd = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [isAvailable, setIsAvailable] = useState(0)
    return (
        <>
        <h3>DODAJ PRODUKT</h3>
        <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="nazwa"></input>
        <input
            type="text"
            value={type}
            onChange={(e)=>setType(e.target.value)}
            placeholder="typ"></input>
        <input
            type="text"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            placeholder="cena"></input>
        <input
            required
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Treść artykułu"></input>
        <input
            required
            value={isAvailable}
            onChange={(e)=>setIsAvailable(e.target.value)}
            placeholder="Treść artykułu"></input>

        <div className={styles.submit_container}>
            <button onClick={()=>{
                UseFetch('./api/routes/product',"POST",{
                name,
                type,
                price,
                description,
                isAvailable})
            }} id={styles.submit_accept}>ZATWIERDŹ</button>
        </div>
        <h3>DODAJ ZAMÓWIENIE</h3>
        <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="nazwa"></input>
        <input
            type="text"
            value={type}
            onChange={(e)=>setType(e.target.value)}
            placeholder="typ"></input>
        <input
            type="text"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            placeholder="cena"></input>
        <input
            required
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Treść artykułu"></input>
        <input
            required
            value={isAvailable}
            onChange={(e)=>setIsAvailable(e.target.value)}
            placeholder="Treść artykułu"></input>

        <div className={styles.submit_container}>
            <button onClick={()=>{
                UseFetch('./api/routes/product',"POST",{
                name,
                type,
                price,
                description,
                isAvailable})
            }} id={styles.submit_accept}>ZATWIERDŹ</button>
        </div>
        </>
    );
}
 
export default ProductAdd;