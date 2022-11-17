import { useState } from "react";
import styles from "../styles/comp-styles/AdminAddNewsMenu.module.scss"
import adminStyles from "../styles/Admin.module.scss"
const AddNewsMenu = () => {
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [date,setDate] = useState("")
    const [content,setContent] = useState("")
    const addNewsFunction = async () => {
        const res = await fetch('./api/news/add',{
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ 
                tytul: title,
                autor: author,
                data: date,
                tresc: content
            }),
        })
    }
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
            <button onClick={()=>{addNewsFunction(title,author,date,content)}} id={styles.submit_accept}>ZATWIERDŹ</button>
        </div>
    </div>
    );
}
 
export default AddNewsMenu;