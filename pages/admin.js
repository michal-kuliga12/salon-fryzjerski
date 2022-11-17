import styles from "../styles/Admin.module.scss"
import bookingStyles from "../styles/comp-styles/AdminBooking.module.scss"
import newsStyles from "../styles/comp-styles/AdminNews.module.scss"
import infoStyles from "../styles/comp-styles/AdminInfo.module.scss"

import addVisit from "../models/bookingModel";
import connectMongo from "../lib/connectMongo";
import Image from "next/image";
import AdminNavbar from "../comps/AdminNavbar";
import BookingItem from "../comps/BookingItem";
import newsModel from "../models/newsModel";
import NewsItem from "../comps/AdminNewsItem";
import AddNewsMenu from "../comps/AddNewsMenu";

import { useState } from "react";

const PanelAdmina = ({ booking, news}) => {
    console.log(news)
    const [isActive,setIsActive] = useState(false)

    return (
        <div className={styles.body}>
            <AdminNavbar/>
            <div className={styles.container}>
                <section className={infoStyles.info__section}>
                    <h3>DANE O SPRZEDAŻY</h3>
                    <div className={infoStyles.info__itemContainer}>
                        <div className={infoStyles.info__item}>
                            <p>Pieniądze ze sprzedaży</p>
                            <div>111111</div>
                        </div>
                        <div className={infoStyles.info__item}>
                            <p>Ilość sprzedanych sztuk</p>
                            <div>111111</div>
                        </div>
                        <div className={infoStyles.info__item}>
                            <p>Średnia ocen usługi</p>
                            <div>111111</div>
                        </div>
                        <div className={infoStyles.info__item}>
                            <p>Średnia ocen usługi</p>
                            <div>111111</div>
                        </div>
                    </div>
                </section>
                <section className={bookingStyles.booking__section}>
                    <h3>UMÓWIONE WIZYTY</h3>
                    <div className={bookingStyles.booking__info}>
                        <p>Klient</p>
                        <p>Termin</p>
                    </div>
                    <div className={bookingStyles.booking__list}>
                        {booking.map((item,index)=>{
                            return (
                                <div key={index} className={styles.booking__item}>
                                    <BookingItem item={item} index={index} />
                                </div>  
                            );
                        })}
                    </div>
                </section>
                <section className={newsStyles.news__section}>
                    <div className={newsStyles.news__title}>
                        <h3>AKTUALNOŚCI</h3>
                        <span onClick={()=>{
                            setIsActive(!isActive)
                            console.log(isActive)}}>
                            <Image src="/plus.png" width={26} height={26} />
                        </span>
                    </div>
                    <div className={newsStyles.news__list}>
                        {news.map((item,index)=>{
                            return (
                                <div key={index} className={styles.news__item} >
                                    <NewsItem item={item} index={index} />
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
            <div id={isActive ? styles.newsMenu__active : styles.newsMenu}>
                <AddNewsMenu/>
                <button id={styles.newsMenu_btn} onClick={()=>{setIsActive(!isActive)}}>X</button>
            </div>
        </div>
    );
}
 
export default PanelAdmina;

export const getServerSideProps = async () => {
    try {
        console.log('CONNECTING TO DATABASE')
        await connectMongo()
        console.log('CONNECTED TO DATABASE')
        console.log('FETCHING DOCUMENT')
        const booking = await addVisit.find()
        const news = await newsModel.find()
        console.log('FETCHED DOCUMENT')
        return {
            props: {
                booking: JSON.parse(JSON.stringify(booking)),
                news: JSON.parse(JSON.stringify(news)),
            },
        };
    } catch(error) {
        console.log(error)
        return {
            notFound: true,
        }
    }
}

