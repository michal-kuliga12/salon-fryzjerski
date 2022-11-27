import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Gallery.module.scss"

const zdjecia = [
    "/galeria1.jpg",
    "/galeria2.jpg",
    "/galeria3.jpg",
    "/galeria4.jpg",
    "/galeria5.jpg", 
    "/galeria6.jpg",
    "/galeria7.jpg",
    "/galeria8.jpg",
    "/galeria1.jpg",
    "/galeria2.jpg",
    "/galeria3.jpg",
    "/galeria7.jpg",
];
const Galeria = () => {
    const [zoomActive, setZoomActive] = useState(0);
    const handleClick = (url)=>{
        const fullScreenEl = document.getElementById(`${styles.fullScreen}`);
        setZoomActive(!zoomActive);
        if (zoomActive) {
            fullScreenEl.style.display = "block";
            fullScreenEl.style.backgroundImage = `url(${url})`;
        } else {
            fullScreenEl.style.display = "none";
        }
    }
    return (
        <div className={styles.container}>
        <Head>
            <title>Labella | Galeria</title>
        </Head>
            <div><h1>Galeria</h1></div>
            <div className={styles.gallery_container}>
                {zdjecia.map((url,id)=>{
                    return (
                        <div key={id} className={styles.gallery_item} onClick={()=>{handleClick(url)}} >
                            <Image className={styles.gallery_image} src={url} layout="fill" objectPosition="center"/>
                        </div>
                    );
                })}
            </div>
            <div id={styles.fullScreen} style={{display:"none"}}>
                <button id={styles.fullScreenButton} onClick={handleClick}>X</button>    
            </div>  
        </div>
    );
}
 
export default Galeria;