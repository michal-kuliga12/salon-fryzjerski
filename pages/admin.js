import styles from "../styles/Admin.module.scss"
import bookingStyles from "../styles/comp-styles/AdminBooking.module.scss"
import newsStyles from "../styles/comp-styles/AdminNews.module.scss"
import infoStyles from "../styles/comp-styles/AdminInfo.module.scss"
import orderStyles from "../styles/comp-styles/AdminOrders.module.scss"

import bookingModel from "../models/booking";
import connectMongo from "../lib/connectMongo";
import Image from "next/image";
import AdminNavbar from "../comps/AdminNavbar";
import BookingItem from "../comps/items/BookingItem";
import newsModel from "../models/news";
import NewsItem from "../comps/items/AdminNewsItem";
import AddNewsMenu from "../comps/AddNewsMenu";
import Head from "next/head";

import { useState } from "react";
import useUser from "../lib/useUser";
import orderModel from "../models/order"
import OrderItem from "../comps/items/OrderItem"
import Link from "next/link"

const PanelAdmina = ({ booking, news, order}) => {
    const sortedOrder = order.sort((a,b)=>new Date(a.order_date) - new Date(b.order_date))
    const sortedBooking = booking.sort((a,b)=>new Date(a.data) - new Date(b.data)) 
    const sortedNews = news.sort((a,b)=>new Date(a.order_date) - new Date(b.order_date)) 
    
    const [isActive,setIsActive] = useState(false)
    const { user } = useUser({ redirectTo: "/login"})
    if (!user || user.isLoggedIn === false) {
        return (
            <div style={{padding:"20px"}}>
                <Link href="/">
                    <Image src={"/login-back.png"} width={32} height={32} alt="flaticon"/>
                </Link>
                <div style={{margin:"auto",padding: "20px",lineHeight:"32px", width:"300px",fontSize:"18px"}}>
                    <p>Wystąpił błąd logowania</p>
                    <p>Wróc do ekranu logowania</p>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.body}>
        <Head>
            <title>Labella | Panel admina</title>
        </Head>
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
                    <div className={bookingStyles.booking__list}>
                        {sortedBooking.map((item,index)=>{
                            return (
                                <div key={index} className={bookingStyles.booking__item}>
                                    <BookingItem item={item} index={index} />
                                </div>  
                            );
                        })}
                    </div>
                </section>
                <section className={orderStyles.order__section}>
                    <h3>ZAMÓWIENIA</h3>
                    {sortedOrder.map((item,index)=>{
                        return (
                            <div key={index} className={orderStyles.order__item}>
                                <OrderItem item={item} index={index} />
                            </div>
                        )
                    })}
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
                        {sortedNews.map((item,index)=>{
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
        const order = await orderModel.find()
        const booking = await bookingModel.find()
        const news = await newsModel.find()
        console.log('FETCHED DOCUMENT')
        return {
            props: {
                order: JSON.parse(JSON.stringify(order)),
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

