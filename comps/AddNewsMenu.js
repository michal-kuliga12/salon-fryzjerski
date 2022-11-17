import { useState } from "react";
import styles from "../styles/comp-styles/AdminAddNewsMenu.module.scss"
import adminStyles from "../styles/Admin.module.scss"
import UseFetch from "../comps/UseFetch";

const AddNewsMenu = () => {
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [date,setDate] = useState("")
    const [content,setContent] = useState("")
    return (
    <div className={styles.container}>
        <h3>DODAJ ARTYKUŁ</h3>
        <input
            type="text"
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Tytuł artykułu"></input>
        <input
            type="text"
            required
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            placeholder="Autor artykułu"></input>
        <input
            type="text"
            required
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            placeholder="Aktualna data"></input>
        <textarea
            required
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            placeholder="Treść artykułu"></textarea>
        <div className={styles.submit_container}>
            <button onClick={()=>{
                UseFetch('./api/news/add',"POST",{
                    tytul: title,
                    autor: author,
                    data: date,
                    tresc: content})
            }} id={styles.submit_accept}>ZATWIERDŹ</button>
        </div>
    </div>
    );
}
 
export default AddNewsMenu;